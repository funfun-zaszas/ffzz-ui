import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import { Main, SidePanel, TabBar } from '@aragon/ui'
import PartyList from './components/PartyList'
import CreateParty from './components/CreateParty'
import CreateProgram from './components/CreateProgram'
import getWeb3 from "./utils/getWeb3";
import Web3 from 'web3'

import "./App.css";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null, createPartyPanel: false, selected: 0 };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      console.log(SimpleStorageContract);
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      console.log(deployedNetwork)
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  setSelected = selectedTab => {
    if (selectedTab == 1) {
      this.setState({ createPartyPanel: true })
    } else {
      this.setState({ selected: selectedTab })
    }
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
  runExample = async () => {
    const { accounts, contract } = this.state;

    // Get the value from the contract to prove it worked.
    let response = await contract.methods.get().call();

    // Update state with the result.
    this.setState({ storageValue: response.toString() });

    // // Stores a given value, 5 by default.
    //let promise = await contract.methods.set(parseInt(response) + 1).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    response = await contract.methods.get().call();

    // Update state with the result.
    this.setState({ storageValue: response.toString() });
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <Main>
        <TabBar
          items={['Parties', 'Create Party', 'CreateProgram']}
          selected={this.selected}
          onChange={this.setSelected}
        />
        {this.selectPage(this.state.selected)}
        <SidePanel title="Create party" opened={this.state.createPartyPanel}>
          <CreateParty />
        </SidePanel>
      </Main>
      );
  }
}

export default App;
