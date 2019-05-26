import React from 'react'
import { Button, Text, Field } from '@aragon/ui'
import styled from 'styled-components'
import useForm from '../useForm'

function CreatePromise(props) {
  const { values, handleChange, handleSubmit } = useForm(createPromise)

  function createPromise() {
    console.log('Creating a new promise...')
    console.log(values)
  }

  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <Field label="Description">
          <Input
            required
            placeholder="Description"
            name="description"
            onChange={handleChange}
            value={values.description}
          />
        </Field>
        <Field label="RADON data request">
          <Textarea
            required
            placeholder="{}"
            name="dataRequest"
            onChange={handleChange}
            value={values.dataRequest}
          />
        </Field>
        <UpperButton mode="strong">Create promise</UpperButton>
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

export default CreatePromise