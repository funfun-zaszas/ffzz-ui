import React, { Component } from 'react'
import { Button, Text, Checkbox } from '@aragon/ui'
import styled from 'styled-components'
import { __values } from 'tslib';


class CreateProgram extends Component {
  state = {
    airQuality: false,
    riskPremium: false,
  }

  handleChange(e, name) {
    console.log('Inside handleChange', e, name)
    const newState = {}
    newState[`${name}`] = e
    this.setState(newState)
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('Creating a program...')
  }

  render() {
    return (
      <Layout>
        <Form onSubmit={this.handleSubmit}>
          <label>
            <Checkbox
              name="airQuality"
              checked={this.state.airQuality}
              onChange={event => this.handleChange(event, 'airQuality')}
            />
            Air quality
          </label>
          <label>
            <Checkbox
              name="premiumPrime"
              checked={this.state.riskPremium}
              onChange={e => this.handleChange(e, 'premiumPrime')}
            />
            Risk premium
          </label>
          <Button mode="strong">Create program with {Object.values(this.state).reduce((acc, e) => { return acc + (e ? 1 : 0)  }, 0)} promises</Button>
        </Form>
      </Layout>
    )
  }
}

const Layout = styled.div`
  display: flex;
  justify-content: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
`

const Title = styled(Text)`
  text-align: center;
`
export default CreateProgram