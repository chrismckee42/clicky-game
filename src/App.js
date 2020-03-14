import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Jumbotron from "./components/Jumbotron";
import Container from "./components/Container";
import beth from "./assets/beth.png"
import birdperson from "./assets/birdperson.png"
import evilMorty from "./assets/evilmorty.png"
import gianthead from "./assets/gianthead.png"
import goldenford from "./assets/goldenford.png"
import jerry from "./assets/jerry.png"
import jessica from "./assets/jessica.png"
import meeseeks from "./assets/meeseeks.png"
import morty from "./assets/morty.png"
import mr from "./assets/mr.png"
import rick from "./assets/rick.png"
import summer from "./assets/summer.png"

const images = [beth, birdperson, evilMorty, gianthead, goldenford, jerry, jessica, meeseeks, morty, mr, rick, summer]

function App() {
  console.log('images[0]', images[0])
  return <div>
    <Navbar />;
    <Container>
      <Jumbotron />
      <Container>
        {images.map((element,i) => <Card img={element} key={i}/>)}
      </Container>
    </Container>
  </div>
}

export default App;
