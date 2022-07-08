import React, { Component } from "react";
import Cards from "./cards";
import Navbar from "../navbar";
import data from "../../assets/data/cards.json";

class Home extends Component {
    state = {
        cards: data
    }

    render() {
        return (
            <div>
                <Navbar txtColor1="txtColor1" txtColor2="txtColor2" txtColor3="txtColor2" txtColor4="txtColor2" txtColor5="txtColor2" />
                <h2 className="txt-title">Photos - Reading a json file</h2>
                <Cards data={this.state.cards} />
            </div>
        )
    }
}

export default Home;