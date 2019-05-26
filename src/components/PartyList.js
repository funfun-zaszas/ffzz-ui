import React, { Component } from "react";
import Party from "./Party";
import styled from "styled-components";

class PartyList extends Component {

  render() {
    console.log("PARTIES:",this.props.parties)
    const parties = this.props.parties
    const proposals = [
      {
        label: "Air Quality",
        description: "Decrease air pollution under 10ppm",
      },
      {
        label: "Murder",
        description: "Reduce the number of murders below 200 per year",
      },
      {
        label: "Risk Premium",
        description: "Reduce the risk premium below 80 points",
      },
    ];
    // const parties = [
    //   {
    //     name: "Rose",
    //     emoji: "🌹",
    //     program: [...proposals]
    //   },
    //   {
    //     name: "Kaja",
    //     emoji: "📦",
    //     program: [...proposals]
    //   },
    //   {
    //     name: "Jose",
    //     emoji: "✉️",
    //     program: [...proposals]
    //   }
    // ];
    const list = parties && parties.length ? parties.map((party, index) => {
      console.log("PARTY", party)
      return (
        <Party emoji={party.emoji} program={proposals} key={party.fake_name+index} name={party.fake_name} />
      );
    }) : <div>Create a Party to be listed here</div>

    return <Layout>{list}</Layout>;
  }
}

const Layout = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-auto-columns: auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-template-columns: repeat(auto-fill, 500px);
  padding: 50px;
`

export default PartyList
