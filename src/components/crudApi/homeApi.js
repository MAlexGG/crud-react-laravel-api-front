import React, { useState, useEffect } from "react";
import Navbar from "../navbar";
import { Link } from "react-router-dom";
import { serviceApi } from "../../services/serviceApi";
import CrudApiCard from "./CrudApiCard";

function HomeApi() {

    const [cards, setCards] = useState([]);

    let api = serviceApi();
 
    useEffect(() => {
        api.get().then(res => {
            console.log(res)
            //setCards(res.data.data);
        });
    }, [])
  
    return (
        <div>
            <Navbar txtColor1="txtColor2" txtColor2="txtColor2" txtColor3="txtColor2" txtColor4="txtColor2" txtColor5="txtColor1" />
            <h2 className="txt-title">CRUD consuming Api from Laravel</h2>
            <Link to="/crud-api-create"><button className='bt-form-send'>Create Card</button></Link>
            <div className="ct-cards">
                {
                    cards.map((card, index) => (
                        <CrudApiCard key={index} card={card} />
                    ))
                }
            </div>
        </div>
    )
}

export default HomeApi;