import React from 'react'
import { Text, Field } from '@aragon/ui'
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
          <input
            required
            placeholder="Description"
            name="description"
            onChange={handleChange}
            value={values.description}
          />
        </Field>
        <Field label="RADON data request">
          <input
            required
            placeholder="{}"
            name="dataRequest"
            onChange={handleChange}
            value={values.dataRequest}
          />
        </Field>
        <input type="submit" value="Create promise" />
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
export default CreatePromise