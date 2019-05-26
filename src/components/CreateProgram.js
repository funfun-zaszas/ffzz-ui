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

  countPromises() {
    return Object.values(this.state).reduce((acc, e) => { return acc + (e ? 1 : 0)  }, 0)
  }

  render() {
    return (
      <Layout>
        <Form onSubmit={this.handleSubmit}>
          <label>
            <PromiseCheckbox
              name="airQuality"
              checked={this.state.airQuality}
              onChange={event => this.handleChange(event, 'airQuality')}
            />
            Air quality
          </label>
          <label>
            <PromiseCheckbox
              name="premiumPrime"
              checked={this.state.riskPremium}
              onChange={e => this.handleChange(e, 'riskPremium')}
            />
            Risk premium
          </label>
          <UpperButton mode="strong">Create program with {this.countPromises()} promise{this.countPromises() != 1 ? "s" : ""}</UpperButton>
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
  width: 100%;
`
const Input = styled.input`
  width: 100%;
  padding: 10px 5px;
  margin-top: 4px;
`
const UpperButton = styled(Button)`
  text-transform: uppercase;
  font-weight: 600;
  width: 100%;
`

const PromiseCheckbox = styled(Checkbox)`
  margin-bottom: 20px;
`

export default CreateProgram