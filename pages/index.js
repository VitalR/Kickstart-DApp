import React, { Component } from 'react'
import { Button, Card } from 'semantic-ui-react'
import factory from '../ethereum/factory'
import Layout from '../components/Layout'

class CrowdfundingIndex extends Component {
    static async getInitialProps() {
        const crowdfunds = await factory.methods.getDeployedCrowdfunding().call()

        return { crowdfunds }
    }

    renderCrowdfunds() {
        const items = this.props.crowdfunds.map(address => {
            return {
                header: address,
                description: <a>View Crowdfunding</a>,
                fluid: true
            }
        })

        return <Card.Group items={items} />
    }

    render() {
        return (
        <Layout>
            <div>
                <link
                    async
                    rel="stylesheet"
                    href="//cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css"
                />
                <script
                    async
                    src="//cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.js"
                ></script>
                <h3>Open Crowdfunding Projects</h3>        
                <Button floated="right"
                    content="Create Project"
                    icon="add circle"
                    primary 
                />
                {this.renderCrowdfunds()}
            </div>
        </Layout>
        )
    }

    // async componentDidMount() {
    //     const crowdfunds = await factory.methods.getDeployedCrowdfunding().call()

    //     console.log(crowdfunds)
    // }
}

export default CrowdfundingIndex


// export default () => {
//     return (
//         <h1>This is the crowdfunding list page!!!</h1>
//     )
// }