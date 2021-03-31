import React, { Component } from 'react'
import { Card, Grid, Button } from 'semantic-ui-react'
import Layout from '../../components/Layout'
import Project from '../../ethereum/project'
import web3 from '../../ethereum/web3'
import ContributeForm from '../../components/ContrubuteForm'
import { Link } from '../../routes'

class ProjectShow extends Component {
    static async getInitialProps(props) {
        const project = Project(props.query.address)

        const summary = await project.methods.getSummary().call()
        console.log(summary)

        return { 
            address: props.query.address,
            minimumContribution: summary[0],
            balance: summary[1],
            requestCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
         }
    }

    renderCards() {
        const {
            balance,
            manager,
            minimumContribution,
            requestCount,
            approversCount
        } = this.props

        const items = [
            {
                header: manager,
                meta: 'Address of Manager',
                description: 
                    'The manager created this crowdfunding project and can create request to withdraw money.',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: minimumContribution,
                meta: 'Minimum Contribution (wei)',
                description: 'You must contribute at least this much wei to became an approver.'
            },
            {
                header: requestCount,
                meta: 'Number of Requests',
                description: 
                    'A request tries to withdraw money from the contract. Request must be approved by apprevers.'
            },
            {
                header: approversCount,
                meta: 'Number of Approvers',
                description: 'Number of people who have already donated to this project.'
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Crowdfunding Project Balance (ether)',
                description: 'The balance is how much coins this project has left to spend.'
            }
        ]

        return <Card.Group items={items} />
    }

    render() {
        return (
            <Layout>
                <h3>Project Show</h3>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            {this.renderCards()}  
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <ContributeForm address={this.props.address} />
                        </Grid.Column>
                    </Grid.Row>
                        
                    <Grid.Row>
                        <Grid.Column>
                            <Link route={`/projects/${this.props.address}/requests`}>
                                <a>
                                    <Button primary>View Requests</Button>
                                </a>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Layout>
        )
    }
}

export default ProjectShow