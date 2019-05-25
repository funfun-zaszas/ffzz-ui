import React from 'react'
import { TextInput, Text } from '@aragon/ui'
import styled from 'styled-components'
import useForm from '../useForm'

function CreateParty(props) {
  const { values, handleChange, handleSubmit } = useForm(createParty)

  function createParty() {
    console.log('Creating a party...')
    console.log(values)
  }

  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <Title size="xxlarge">Create Party</Title>
        <TextInput
          required
          placeholder="Label"
          name="label"
          onChange={handleChange}
          value={values.label}
        />
        <TextInput
          required
          placeholder="Emoji"
          name="emoji"
          onChange={handleChange}
          value={values.emoji}
        />
        <TextInput
          required
          placeholder="Description"
          name="description"
          onChange={handleChange}
          value={values.description}
        />
        <TextInput
          required
          placeholder="Fake name"
          name="fakeName"
          onChange={handleChange}
          value={values.fakeName}
        />
        <input type="submit" value="Submit" />
      </Form>
    </Layout>
  )
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
export default CreateParty
