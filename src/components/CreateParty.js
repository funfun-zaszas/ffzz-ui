import React from 'react'
import { Text, Field } from '@aragon/ui'
import styled from 'styled-components'
import useForm from '../useForm'
import { Button } from '@aragon/ui'

function CreateParty(props) {
  const { values, handleChange, handleSubmit } = useForm(createParty)
  function createParty() {
    props.handleSubmit(values)
  }

  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <Field label="Code">
          <Input
            required
            name="label"
            onChange={handleChange}
            value={values.label}
          />
        </Field>
        <Field label="Emoji">
          <Input
            required
            name="emoji"
            onChange={handleChange}
            value={values.emoji}
          />
        </Field>
        <Field label="Description">
          <Input
            required
            placeholder="Description"
            name="description"
            onChange={handleChange}
            value={values.description}
          />
        </Field>
        <Field label="Display name">
          <Input
            required
            name="fakeName"
            onChange={handleChange}
            value={values.fakeName}
          />
        </Field>
        <Field label="RADON data request">
          <Textarea
            required
            name="dataRequest"
            onChange={handleChange}
            value={values.dataRequest}
          />
        </Field>
        <UpperButton type="submit" mode="strong">Create {values.label} party</UpperButton>
      </Form>
    </Layout>
  )
}

const Layout = styled.div`
  display: flex;
  justify-content: center;
`
const Form = styled.form`
  width: 100%;
`
const Input = styled.input`
  width: 100%;
  padding: 10px 5px;
  margin-top: 4px;
`
const Textarea = styled.textarea`
  width: 100%;
  min-height: 200px;
  border: 1px solid #BBB;
  border-radius: 4px;
  padding: 10px 5px;
  margin-top: 4px;
`
const UpperButton = styled(Button)`
  text-transform: uppercase;
  font-weight: 600;
  width: 100%;
`

export default CreateParty