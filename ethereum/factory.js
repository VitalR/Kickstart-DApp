import web3 from './web3'
import CrowdfundingFactory from './build/CrowdfundingFactory.json'

const instance = new web3.eth.Contract(
    JSON.parse(CrowdfundingFactory.interface),
    '0xB6AE73fFC4EB04cD2C0ba5A9a75A3666868d67a0'
)

export default instance

