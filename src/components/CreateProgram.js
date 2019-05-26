import React, { Component } from 'react'
import { Button, Text, Checkbox } from '@aragon/ui'
import styled from 'styled-components'
import { __values } from 'tslib';


class CreateProgram extends Component {
  // state = {
  //   airQuality: false,
  //   riskPremium: false,
  // }
  constructor(props) {
    super(props)
    

    const checked = props.proposals ? props.proposals.map(_ => false) : []
    this.state = {
      checked
    }
  }

  handleChange(e, name, index) {
    const newState = {...this.state}
    console.log("eeeeeeeeeeeeeeeeee", e)
    newState["checked"][index] = e
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
    const defaultValue = (<Text>No proposals yet</Text>)
    const proposalList = (this.props.proposals  ) ? this.props.proposals.map((proposal, index) => {
      return (
        <label>
            <PromiseCheckbox
              name={index}
              checked={this.state.checked[index]}
              onChange={event => this.handleChange(event, "checked", index)}
            />
          {proposal.description}
          {/* <Text>{proposal.dataRequest}</Text> */}
        </label>
      )
    }) : defaultValue

    return (
      <Layout>
        <Form onSubmit={this.handleSubmit}>
          {/* <label>
            <PromiseCheckbox
              name="airQuality"
              checked={this.state.airQuality}
              onChange={event => this.handleChange(event,)}
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
          </label> */}
          {proposalList}
          <UpperButton mode="strong">Create program</UpperButton>
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