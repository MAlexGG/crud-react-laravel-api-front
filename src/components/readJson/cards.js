import React, { Component } from "react";
import Card from "./card";

class Cards extends Component {
    render() {
        return (
            <div className="ct-cards">
                {this.props.data.cards.map((card, index) => (
                    <Card key={index} imgName={card.imgName} imgUser={card.imgUser} imgURL={card.imgURL} index={index}></Card>
                ))}
            </div>
        )
    }
}

export default Cards;