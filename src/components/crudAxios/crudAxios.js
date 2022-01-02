import React, { useState, useEffect } from 'react';
import Navbar from '../navbar';
import axios from 'axios';
import CrudAxiosCard from './crudAxiosCard';
import CrudAxiosForm from './crudAxiosForm';
import { Loader } from './loader';

const crudAxios = () => {

    const [cards, setCards] = useState([]);
    const [editData, setEditData] = useState(null);
    const [loading, setLoading] = useState(false);

    let url = "http://localhost:5001/cards";

    useEffect(() => {
        setLoading(true);
        getData().then((res) => {
            setCards(res.data);
            setLoading(false);
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
    };

    const updateData = async (data) => {
        let urlID = `${url}/${data.id}`;
        const res = await axios.put(urlID, data).then((res) => { 
            if (res.status === 200) {
                let newData = cards.map(el => el.id === data.id ? data : el);
                setCards(newData);
                }
        })
    }

    return (
        <div>
            <Navbar txtColor1="txtColor2" txtColor2="txtColor2" txtColor3="txtColor2" txtColor4="txtColor1" />
            <h2 className='txt-title'>CRUD with axios and json server</h2>
            <CrudAxiosForm createData={createData} editData={editData} setEditData={setEditData} updateData={updateData} />
            {loading && <Loader />}
            <div className="ct-cards">
            {
                cards.map((card, index) => (
                    <CrudAxiosCard key={index} imgName={card.imgName} imgUser={card.imgUser} imgURL={card.imgURL} id={card.id} card={card} deleteData={deleteData} setEditData={setEditData} />
                ))
                }
            </div>    
        </div>
    )
}

export default crudAxios;
