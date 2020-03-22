import React, { Component } from 'react'
import Card from "../Card";
import Navbar from "../Navbar";
import Jumbotron from "../Jumbotron";
import beth from "../../assets/beth.png"
import birdperson from "../../assets/birdperson.png"
import evilMorty from "../../assets/evilmorty.png"
import gianthead from "../../assets/gianthead.png"
import goldenford from "../../assets/goldenford.png"
import jerry from "../../assets/jerry.png"
import jessica from "../../assets/jessica.png"
import meeseeks from "../../assets/meeseeks.png"
import morty from "../../assets/morty.png"
import mr from "../../assets/mr.png"
import rick from "../../assets/rick.png"
import summer from "../../assets/summer.png"
import "./style.css";

const images = [beth, birdperson, evilMorty, gianthead, goldenford, jerry, jessica, meeseeks, morty, mr, rick, summer]

//const characters = {}

const clicked = images.map(() => false)

class Container extends Component {
    //cards = images.map((image, i) => <Card img={image} key={i} onClick={this.shuffle} />)

    state = {
        clicked: clicked,
        topScore: 0,
        score: 0,
        cards: () => images.map((image, i) => <Card img={image} key={i} onClick={() => this.clickClick(i)} />),
    }

    clickClick = (id) => {
        console.log(id)
        if (this.state.clicked[id]) {
            //lose
            this.setState({
                topScore: (this.state.topScore < this.state.score ? this.state.score : this.state.topScore),
                score: 0,
                clicked: clicked
            })
        } else if (this.state.score === 11) {
            // win
            this.setState({
                topScore: 12,
                score: 0,
                clicked: clicked
            })
        } else {
            this.setState({
                topScore: (this.state.topScore < this.state.score + 1 ? this.state.score + 1 : this.state.topScore),
                score: this.state.score + 1,
                clicked: this.state.clicked.map((elem,i) => (id === i ? !elem : elem))
            })
        }
        this.shuffle()
    }

    shuffle = () => {
        let oldCards = this.state.cards()
        let newCards = []
        while (oldCards.length >0) {
            newCards.push(oldCards.splice(Math.floor(Math.random()*oldCards.length),1))
        }
        this.setState({
            cards: () => newCards
        })
        
    }

    cardClick = (id) => {
        console.log('object', this.state.chars[id])
    }
    
    render () {
        return (
            <div>
                <Navbar score={this.state.score} topScore={this.state.topScore} />;

                <div className="container">
                        <Jumbotron />
                    <div className="container wrapper">
                        {
                            this.state.cards()
                        }
            
                    </div>
                </div>
            </div>
        )
    }
}

export default Container
