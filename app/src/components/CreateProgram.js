import React, { Component } from 'react'
import { Text, Checkbox } from '@aragon/ui'
import styled from 'styled-components'

class CreateProgram extends Component {
  state = {
    airQuality: false,
    premiumPrime: false,
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
          <Title size="xxlarge">Create Program</Title>
          <label>
            <Checkbox
              name="airQuality"
              checked={this.state.airQuality}
              onChange={event => this.handleChange(event, 'airQuality')}
            />
            Air Quality
          </label>

          <label>
            <Checkbox
              name="premiumPrime"
              checked={this.state.premiumPrime}
              onChange={e => this.handleChange(e, 'premiumPrime')}
            />
            Premium Prime
          </label>
          <input type="submit" value="Submit" />
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
