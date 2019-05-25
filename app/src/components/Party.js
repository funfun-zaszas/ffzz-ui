import React, { useState } from 'react'
import {
  Card as AragonCard,
  Text,
  IconIdentity,
  Button,
  Modal,
} from '@aragon/ui'
import styled from 'styled-components'

function Party(props) {
  const [opened, setOpened] = useState(false)
  return (
    <>
      <Card>
        <Header>
          <Icon />
          <Text>{props.name}</Text>
        </Header>
        <Content>
          <Proposal>
            <p>{props.program[0].label}</p>
            <p>{props.program[0].description}</p>
          </Proposal>

          <Proposal>
            <p>{props.program[1].label}</p>
            <p>{props.program[1].description}</p>
          </Proposal>
          <Proposal>
            <p>{props.program[2].label}</p>
            <p>{props.program[2].description}</p>
          </Proposal>
        </Content>
      </Card>
    </>
  )
}

const Icon = styled(IconIdentity)`
  margin-right: 8px;
`

const Card = styled(AragonCard)`
  display: grid;
  grid-template-rows: 50px 1fr;
  border: 1px solid black;
  padding: 8px;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`
const Proposal = styled.div`
  margin: 8px;
  border: 1px solid black;
  padding: 8px;
`

export default Party
