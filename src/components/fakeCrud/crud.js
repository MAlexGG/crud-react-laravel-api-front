import React, { useState } from 'react';
import CrudCard from './crudCards';
import CrudForm from './crudForm';

const initialDB = [
    {
            "id": 1,
            "imgName": "Waikiki Beach sunset",
            "imgUser": "María",
            "imgURL": "beach"
        },
        {
            "id": 2,
            "imgName": "Stars at night",
            "imgUser": "Belén",
            "imgURL": "stars"
        }
];

const Crud = () => {
     
    const [db, setDB] = useState(initialDB);
    const [editData, setEditData] = useState(null);

    const createData = (data) => {
        //console.log(data);
        data.id = Date.now();
        setDB([...db, data])
    }
    
    const updateData = (data) => {
        let newData = db.map(el => el.id === data.id ? data : el);
        setDB(newData);
    } 

    const deleteData = (id) => {
        let isDelete = window.confirm(`Do you really want to delete the image with id: ${id}?`);
        if (isDelete) {
        let newData = db.filter(el => el.id !== id);
        setDB(newData);
        } else {
        return;
        };
    };


    return (
        <div>
            <h2 className='txt-title'>CRUD using the browser memory</h2>
            <CrudForm createData={createData} updateData={updateData} editData={editData} setEditData={setEditData}/>
            <CrudCard data={db} setEditData={setEditData} deleteData={deleteData}/>
        </div>
    )
}

export default Crud;
