const { interfaces } = require('mocha')
const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const compiledFactory = require('./build/CrowdfundingFactory.json')

const provider = new HDWalletProvider(
    'essay machine neck become blame wife extend doll artefact figure pride bag',
    'https://rinkeby.infura.io/v3/540967bd92ea4566aed266c2e1657de5'
)
const web3 = new Web3(provider)

const deploy = async () => {
    const accounts = await web3.eth.getAccounts()

    console.log('Attempting to deploy from account', accounts[0])

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ gas: '1000000', from: accounts[0] })

    console.log(compiledFactory.interface)
    console.log('Contract deployed to ', result.options.address)
}
deploy()
