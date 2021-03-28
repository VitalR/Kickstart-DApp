import React, { Component } from 'react'
import factory from '../ethereum/factory'

class CrowdfundingIndex extends Component {
    static async getInitialProps() {
        const crowdfunds = await factory.methods.getDeployedCrowdfunding().call()

        return { crowdfunds }
    }

    // async componentDidMount() {
    //     const crowdfunds = await factory.methods.getDeployedCrowdfunding().call()

    //     console.log(crowdfunds)
    // }

    render() {
        return <div>{this.props.crowdfunds[0]}</div>
    }
}

export default CrowdfundingIndex


// export default () => {
//     return (
//         <h1>This is the crowdfunding list page!!!</h1>
//     )
// }