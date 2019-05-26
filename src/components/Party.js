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
  console.log(props)
  return (
    <>
      <Card>
        <Header>
          {/* <Icon /> */}
          <Text>{props.emoji} {props.name}</Text>
        </Header>
        <Content>
          <Proposal>
            <strong>{props.program[0].label}</strong>
            <p>{props.program[0].description}</p>
          </Proposal>
          <Proposal>
            <strong>{props.program[1].label}</strong>
            <p>{props.program[1].description}</p>
          </Proposal>
          <Proposal>
            <strong>{props.program[2].label}</strong>
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
  box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
  padding: 0;
  height: auto;
  width: 100%;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #DDD;
  padding: 15px 15px;
  font-weight: 600;
  font-size: 1.2em;
  background-image: linear-gradient( 130deg,#00B4E6,#00F0E0 );
  color: white;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`
const Proposal = styled.div`
  margin: 8px;
  border-bottom: 1px solid #EEE;
  padding: 8px;

  &:last-child {
    border: none;
    margin-bottom: 10px;
  }

  strong {
    color: #333;
  }

  p {
    color: #999;
  }
`

export default Party