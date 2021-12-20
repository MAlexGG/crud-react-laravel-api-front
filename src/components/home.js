import React, { Component } from "react";
import Cards from "./cards";
import Navbar from "./navbar";
import data from "../assets/data/cards.json";

class Home extends Component {
    state = {
        cards: data
    }
    render() {
        return (
            <div>
                <Navbar txtColor="txtColor1" />
                <h2 className="txt-title">Photos - Reading a json file</h2>
                <Cards data={this.state.cards}/>
            </div>
        )
    }
}

export default Home;