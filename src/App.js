import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json"
import Ethpain from "./contracts/Ethpain.json"
import { Main, SidePanel, TabBar } from '@aragon/ui'
import PartyList from './components/PartyList'
import CreateParty from './components/CreateParty'
import CreateProgram from './components/CreateProgram'
import CreatePromise from './components/CreatePromise'
import getWeb3 from "./utils/getWeb3";
import Web3 from 'web3'

import "./App.css";

class App extends Component {
  state = { 
    storageValue: 0, 
    web3: null, 
    accounts: null, 
    contract: null, 
    selected: 0,  
    createPartyPanel: false, 
    createPromisePanel: false, 
    createProgramPanel: false
   };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = Ethpain.networks[networkId];
      const instance = new web3.eth.Contract(
        Ethpain.abi,
        deployedNetwork && deployedNetwork.address,
      );
      console.log(Ethpain.abi);

      // const ethpain = new web3.eth.Contract(
      //   Ethpain.abi,
      //   deployedNetwork && deployedNetwork.address,
      // );
      // console.log(ethpain);

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      
      //const parties  = await this.listParties()
      //console.log("PARTIES::", parties)

      this.setState({ web3, accounts, contract: instance}, () => {
        console.log(instance);
      });

      const a = await this.listParties({web3, accounts, contract: instance})
      
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
    } else if (selectedTab == 2) {
      this.setState({ createPromisePanel: true })
    } else if (selectedTab == 3) {
      this.setState({ createProgramPanel: true })
    } else {
      this.selectPage(0);
    }
  }

  closePanels = () => {
    this.setState({
      createPartyPanel: false, 
      createPromisePanel: false, 
      createProgramPanel: false
    })
  }

  selectPage = pageNumber => {
    return <PartyList />
  }

  runExample = async () => {
    // const { accounts, contract } = this.state;

    // // Get the value from the contract to prove it worked.
    // let response = await contract.methods.get().call();

    // // Update state with the result.
    // this.setState({ storageValue: response.toString() });

    // // // Stores a given value, 5 by default.
    // //let promise = await contract.methods.set(parseInt(response) + 1).send({ from: accounts[0] });

    // // Get the value from the contract to prove it worked.
    // response = await contract.methods.get().call();

    // // Update state with the result.
    // this.setState({ storageValue: response.toString() });
  };

  createParty = async (party) => {
    console.log('herer')
    const response = await this.state.contract.methods.create_party(this.encodeBytes32(party.label), party.emoji, party.description, party.fakeName, party.dataRequest).send({ from: this.state.accounts[0] });
    //const response = await this.state.contract.methods.create_party(puf, "📦", "El partido de las cajas", "KAJA", "dr_kaja").send({ from: this.state.accounts[0] });
    console.log("Party creation:", response)
    
   }

   listParties = async (state) => {
      if (state){
        let parties = await state.contract.methods.list_parties().call();
        return parties
      } else {
        let parties = await this.state.contract.methods.list_parties().call();
        return parties
      }
   }

   encodeBytes32 = (text) => this.state.web3.utils.fromAscii(text).padEnd(66, '0');
   

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }

    
    return (
      <Main>
        <TabBar
          items={['Parties', 'New party', 'New promise', 'Create program']}
          selected={this.selected}
          onChange={this.setSelected}
        />
        {this.selectPage(this.state.selected)}
        <SidePanel title="New party" opened={this.state.createPartyPanel} onClose={this.closePanels}>
          <CreateParty handleSubmit={this.createParty}/>
        </SidePanel>
        <SidePanel title="New promise" opened={this.state.createPromisePanel} onClose={this.closePanels}>
          <CreatePromise />
        </SidePanel>
        <SidePanel title="Create program" opened={this.state.createProgramPanel} onClose={this.closePanels}>
          <CreateProgram />
        </SidePanel>
      </Main>
      );
  }
}

export default App;
