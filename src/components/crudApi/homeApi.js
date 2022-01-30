import React, {useEffect} from "react";
import Navbar from "../navbar";
import { Link } from "react-router-dom";
import axios from "axios";

function HomeApi() {
 
    useEffect(() => {
        
        axios.get('/api/cards').then(res => {
            console.log(res);
        });

    }, [])
  
    return (
        <div>
            <Navbar txtColor1="txtColor2" txtColor2="txtColor2" txtColor3="txtColor2" txtColor4="txtColor2" txtColor5="txtColor1" />
            <h2 className="txt-title">CRUD consuming Api from Laravel</h2>
            <Link to="/crud-api-create"><button className='bt-form-send'>Create Card</button></Link>
        </div>
    )
}

export default HomeApi;