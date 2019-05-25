import React, { useState } from 'react'
// import { useAragonApi } from '@aragon/api-react'
import { Main, TabBar } from '@aragon/ui'
import PartyList from './components/PartyList'
import CreateParty from './components/CreateParty'
import CreateProgram from './components/CreateProgram'

function App() {
  // const { api, appState } = useAragonApi()
  // const { count, syncing } = appState
  const [selected, setSelected] = useState(0)

  const renderSelectedPage = pageNumber => {
    if (pageNumber === 0) {
      return <PartyList />
    } else if (pageNumber === 1) {
      return <CreateParty />
    } else if (pageNumber === 2) {
      return <CreateProgram />
    }
  }

  return (
    <Main>
      <TabBar
        items={['Parties', 'Create Party', 'CreateProgram']}
        selected={selected}
        onChange={setSelected}
      />
      {renderSelectedPage(selected)}
    </Main>
  )
}

export default App
