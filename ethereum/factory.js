import web3 from './web3'
import CrowdfundingFactory from './build/CrowdfundingFactory.json'

const instance = new web3.eth.Contract(
    JSON.parse(CrowdfundingFactory.interface),
    '0xCa32b19455E3b9B476E07bb8eBd58F0065865b61'
)

export default instance

