import React from 'react'
import { Text, Field } from '@aragon/ui'
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
        <Field label="Label">
          <input
            required
            name="label"
            onChange={handleChange}
            value={values.label}
          />
        </Field>
        <Field label="Emoji">
          <input
            required
            name="emoji"
            onChange={handleChange}
            value={values.emoji}
          />
        </Field>
        <Field label="Description">
          <input
            required
            placeholder="Description"
            name="description"
            onChange={handleChange}
            value={values.description}
          />
        </Field>
        <Field label="Fake name">
          <input
            required
            name="fakeName"
            onChange={handleChange}
            value={values.fakeName}
          />
        </Field>
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