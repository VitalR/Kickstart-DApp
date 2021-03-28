const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')
const web3 = new Web3(ganache.provider())

const compiledFactory = require('../ethereum/build/CrowdfundingFactory.json')
const compiledCrowdfunding = require('../ethereum/build/Crowdfunding.json')

let accounts
let factory
let crowdfundingAddress
let crowdfunding

beforeEach(async () => {
    accounts = await web3.eth.getAccounts()

    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ from: accounts[0], gas: '1000000' })

    await factory.methods.createCrowdfunding('1000000000000000000').send({
        from: accounts[0],
        gas: '1000000'
    })

    const addresses = await factory.methods.getDeployedCrowdfunding().call()
    crowdfundingAddress = addresses[0]

    crowdfunding = await new web3.eth.Contract(
        JSON.parse(compiledCrowdfunding.interface),
        crowdfundingAddress
    )
})

describe('Crowdfunding', () => {
    it('deploys a factory and a crowdfunding contracts', () => {
        assert.ok(factory.options.address)
        assert.ok(crowdfunding.options.address)
    })

    it('marks caller as the crowdfunding manager', async () => {
        const manager = await crowdfunding.methods.manager().call()
        assert.equal(accounts[0], manager)
    })

    it('allows people to contribute coins and marks them as approvers', async () => {
        await crowdfunding.methods.contribute().send({
            from: accounts[1],
            value: web3.utils.toWei('1', 'ether')
        })

        const isContributor = await crowdfunding.methods.approvers(accounts[1]).call()

        assert(isContributor)
    })

    it('requires a minimum contribution', async () => {
        try {
            await crowdfunding.methods.contribute().send({
                from: accounts[1],
                value: '100000000000000000'
            })
            assert(false)
        } catch (err) {
            assert(err)
        }
    })

    it('allows a manager to make a payment request', async () => {
        await crowdfunding.methods.createRequest(
            'test description',
            '100000000000000000',
            accounts[5]
        ).send({
            from: accounts[0],
            gas: '1000000'
        })
        const request = await crowdfunding.methods.requests(0).call()
        
        assert.equal('test description', request.description)
        assert.equal('100000000000000000', request.value)
        assert.equal(accounts[5], request.recipient)
    })

    it('only a manager can make a payment request', async () => {
        try {
            await crowdfunding.methods
                .createRequest('test description', '100000000000000000', accounts[5])
                .send({ from: accounts[0], gas: '1000000'})

            assert(false)
        } catch (err) {
            assert(err)
        }
    })

    it('processes requests', async () => {
        await crowdfunding.methods.contribute().send({
            from: accounts[0],
            value: web3.utils.toWei('10', 'ether')
        })

        await crowdfunding.methods
            .createRequest('Test', web3.utils.toWei('5', 'ether'), accounts[1])
            .send({ from: accounts[0], gas: '1000000' })

        await crowdfunding.methods.approveRequest(0).send({
            from: accounts[0],
            gas: '1000000'
        })

        await crowdfunding.methods.finalizeRequest(0).send({
            from: accounts[0],
            gas: '1000000'
        })

        let balance = await web3.eth.getBalance(accounts[1]) // string in wei
        balance = web3.utils.fromWei(balance, 'ether') // string in ether
        balance = parseFloat(balance)
   
        assert(balance > 103)
    })

    it('allows approve request for contributors and only one time', async () => {
        await crowdfunding.methods.contribute().send({
            from: accounts[1],
            value: web3.utils.toWei('10', 'ether')
        })

        await crowdfunding.methods
            .createRequest('Test', web3.utils.toWei('5', 'ether'), accounts[2])
            .send({ from: accounts[0], gas: '1000000'})

        try {
            await crowdfunding.methods.approveRequest(0).send({
                from: accounts[3],
                gas: '1000000'
            })
            assert(false)
        } catch (err) {
            assert(err)
        }

        await crowdfunding.methods.approveRequest(0).send({
            from: accounts[1],
            gas: '1000000'
        })

        try {
            await crowdfunding.methods.approveRequest(0).send({
                from: accounts[1],
                gas: '1000000'
            })
            assert(false)
        } catch (err) {
            assert(err)
        }
    })   
})
