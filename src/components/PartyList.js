import React, { Component } from "react";
import Party from "./Party";
import styled from "styled-components";

class PartyList extends Component {

  render() {
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
    const parties = [
      {
        name: "Rose",
        emoji: "🌹",
        program: [...proposals]
      },
      {
        name: "Kaja",
        emoji: "📦",
        program: [...proposals]
      },
      {
        name: "Jose",
        emoji: "✉️",
        program: [...proposals]
      }
    ];

    const list = parties.map(party => {
      return (
        <Party emoji={party.emoji} program={party.program} key={party.name} name={party.name} />
      );
    });

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
