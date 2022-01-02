import React, { Component } from "react";
import { Link } from "react-router-dom";
/* import logo from "../assets/ico/logoJapones.svg"; */

class Navbar extends Component{

    render() {
        return (
            <div className="ct-header">
                {/* <Link to="/"><img className="img-logo" src={logo} alt="logo" /></Link> */}
                <Link to="/" className={this.props.txtColor1}>READ-JSON</Link>
                <Link to="/fake-crud" className={this.props.txtColor2}>FAKE-CRUD</Link>
                <Link to="/crud-fetch" className={this.props.txtColor3}>CRUD-FETCH</Link>
                <Link to="/crud-axios" className={this.props.txtColor4}>CRUD-AXIOS</Link>
            </div>
        )
    }
}

export default Navbar;



