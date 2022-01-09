import React, { Component } from "react";
import Navbar from "../navbar";

class HomeApi extends Component {
    
    render() {
        return (
            <div>
                <Navbar txtColor1="txtColor2" txtColor2="txtColor2" txtColor3="txtColor2" txtColor4="txtColor2" txtColor5="txtColor1" />
                <h2 className="txt-title">Consuming Api from Laravel</h2>
            </div>
        )
    }
}

export default HomeApi;