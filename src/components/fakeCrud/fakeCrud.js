import React from "react";
import Crud from "./crud";
import Navbar from "../navbar";

const FakeCrud = () => {
    
    return (
        <div>
            <Navbar txtColor1="txtColor2" txtColor2="txtColor1" txtColor3="txtColor2" txtColor4="txtColor2" txtColor5="txtColor2"/>
            <Crud />
        </div>
    )
}

export default FakeCrud;