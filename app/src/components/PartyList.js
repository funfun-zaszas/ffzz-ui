import React from 'react'
import Party from './Party'
import styled from 'styled-components'

function PartyList() {
  const proposals = [
    {
      label: 'Proposal1',
      emoji: 'Emoji1',
      description: 'Description1',
      fakeName: 'FakeName1',
    },
    {
      label: 'Proposal2',
      emoji: 'Emoji2',
      description: 'Description2',
      fakeName: 'FakeName2',
    },
    {
      label: 'Proposal2',
      emoji: 'Emoji2',
      description: 'Description2',
      fakeName: 'FakeName2',
    },
    {
      label: 'Proposal3',
      emoji: 'Emoji3',
      description: 'Description3',
      fakeName: 'FakeName3',
    },
    {
      label: 'Proposal4',
      emoji: 'Emoji4',
      description: 'Description4',
      fakeName: 'FakeName4',
    },
    {
      label: 'Proposal5',
      emoji: 'Emoji5',
      description: 'Description5',
      fakeName: 'FakeName5',
    },
    {
      label: 'Proposal6',
      emoji: 'Emoji6',
      description: 'Description6',
      fakeName: 'FakeName6',
    },
    {
      label: 'Proposal7',
      emoji: 'Emoji7',
      description: 'Description7',
      fakeName: 'FakeName7',
    },
    {
      label: 'Proposal8',
      emoji: 'Emoji8',
      description: 'Description8',
      fakeName: 'FakeName8',
    },
    {
      label: 'Proposal9',
      emoji: 'Emoji9',
      description: 'Description9',
      fakeName: 'FakeName9',
    },
  ]
  const parties = [
    {
      name: 'Party 1',
      program: [...proposals],
    },
    {
      name: 'Party 2',
      program: [...proposals],
    },
    {
      name: 'Party 3',
      program: [...proposals],
    },
  ]
  const list = parties.map(party => {
    return <Party program={party.program} key={party.name} name={party.name} />
  })

  return <Layout>{list}</Layout>
}

const Layout = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-auto-columns: auto;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
`

export default PartyList
