import React, { useState, useEffect } from 'react';
import Navbar from '../navbar';
import axios from 'axios';
import CrudAxiosCard from './crudAxiosCard';
import CrudAxiosForm from './crudAxiosForm';

const crudAxios = () => {

    const [cards, setCards] = useState([]);
    //const [editData, setEditData] = useState(null);

    let url = "http://localhost:5001/cards";

    useEffect(() => {
        getData().then((res) => {
            setCards(res.data);
        })
    }, [url]);

    const getData = async () => {
        const res = await axios.get(url);
        return res;
    };

    const createData = async (data) => {
        const res = await axios.post(url, data).then((res) => {
            if (res.status === 201) {
                setCards([...cards, res.data]);
            }
        })
    };

    const deleteData = async (id) => {
        let isDelete = window.confirm(`Do you really want to delete the image with id: ${id}?`);
        if (isDelete) {
            let urlID = `${url}/${id}`;
            const res = await axios.delete(urlID).then((res) => {
            if (res.status === 200) {
                let newData = cards.filter(el => el.id !== id);
                setCards(newData);
            }
        })  
        }
    }



    return (
        <div>
            <Navbar txtColor="txtColor2" />
            <h2 className='txt-title'>CRUD with axios and json server</h2>
            <CrudAxiosForm createData={createData} />
            <div className="ct-cards">
            {
                cards.map((card, index) => (
                    <CrudAxiosCard key={index} imgName={card.imgName} imgUser={card.imgUser} imgURL={card.imgURL} id={card.id} deleteData={deleteData}/>
                ))
                }
            </div>    
        </div>
    )
}

export default crudAxios;
