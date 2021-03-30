import React, { Component } from 'react'
import { Button, Form, Input, Message } from 'semantic-ui-react'
import Layout from '../../components/Layout'
import factory from '../../ethereum/factory'
import web3 from '../../ethereum/web3'

class ProjectNew extends Component {
    state = {
        minimumCotribution: '',
        errorMessage: '',
        loading: false
    }

    onSubmit = async (event) => {
        event.preventDefault()

        this.setState({ loading: true, errorMessage: '' })

        try {
            const accounts = await web3.eth.getAccounts()
            await factory.methods
            .createCrowdfunding(this.state.minimumCotribution)
            .send({ from: accounts[0] })
        } catch (err) {
            this.setState({ errorMessage: err.message })
        }
        
        this.setState({ loading: false })
    }
    
    render() {
        return (
            <Layout>
                <h3>Create a New Project</h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Minimum Contribution:</label>
                        <Input 
                            label="wei" 
                            labelPosition="right" 
                            placeholder="1000000000000000000"
                            value={this.state.minimumCotribution}
                            onChange={event=>
                                this.setState({ minimumCotribution: event.target.value })}
                            />
                    </Form.Field>
                    <Message error header="Oops!" content={this.state.errorMessage} />
                    <Button loading={this.state.loading} primary>Create!</Button>
                </Form>
            </Layout>
        )
    }
}

export default ProjectNew