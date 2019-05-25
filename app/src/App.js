import React, { Component } from 'react'
// import { useAragonApi } from '@aragon/api-react'
import { Main, TabBar } from '@aragon/ui'
import PartyList from './components/PartyList'
import CreateParty from './components/CreateParty'
import CreateProgram from './components/CreateProgram'
import Web3 from 'web3'

class App extends Component {
  constructor() {
    super()
    this.state = {
      account: window.web3.eth.coinbase,
      web3: window.web3,
      ethereum: window.ethereum,
      selected: 0,
      web3Provider: window.ethereum ? new Web3(window.ethereum) : null,
    }
    console.log(this.state.web3Provider)
  }

  setSelected = selectedTab => {
    this.setState({ selected: selectedTab })
  }

  selectPage = pageNumber => {
    if (pageNumber === 0) {
      return <PartyList />
    } else if (pageNumber === 1) {
      return <CreateParty />
    } else if (pageNumber === 2) {
      return <CreateProgram />
    }
  }

  render() {
    if (this.state.web3 && this.state.account) {
      console.log('metamask enabled', this.state.account)
    } else {
      console.log('metamask not enabled')
    }
    return (
      <Main>
        <TabBar
          items={['Parties', 'Create Party', 'CreateProgram']}
          selected={this.selected}
          onChange={this.setSelected}
        />
        {this.selectPage(this.state.selected)}
      </Main>
    )
  }
}

export default App
