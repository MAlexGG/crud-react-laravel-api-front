import React, {useEffect, useState} from "react";
import { helpHttp } from "../../helpers/helpHttp";
import Navbar from "../navbar";
import CrudApiCards from "./crudApiCards";
import CrudApiForm from "./crudApiForm";
import { Loader } from "./loader";
import { Message } from "./message";

const CrudApi = () => {

    const [db, setDB] = useState(null);
    const [editData, setEditData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    let api = helpHttp();
    let url = "http://localhost:5000/cards";

    useEffect(() => {
        setLoading(true);
        api.get(url).then((res) => {
            if (!res.err) {
                setDB(res);
                setError(null);
            } else {
                setDB(null);
                setError(res);
            }
            setLoading(false);
        })
    }, [url])

    const createData = (data) => {
        data.id = Date.now();
        let options = {
            body: data,
            headers: { "content-type": "application/json" }
        };

        api.post(url, options).then((res) => {
            if (!res.err) {
                setDB([...db, res]) 
            } else {
                setError(res);
            }
        });
    }
    
    const updateData = (data) => {
        let endpoint = `${url}/${data.id}`;
        let options = {
            body: data,
            headers: { "content-type": "application/json" }
        };

        api.put(endpoint, options).then((res) => {
            if (!res.err) {
                let newData = db.map(el => el.id === data.id ? data : el);
                setDB([...db, res]);
                setDB(newData);
            } else {
                setError(res);
            } 
        });

    } 

    const deleteData = (id) => {
        let isDelete = window.confirm(`Do you really want to delete the image with id: ${id}?`);

        if (isDelete) {
            let endpoint = `${url}/${id}`;
            let options = {
            headers: { "content-type": "application/json" }
            }; 
            
            api.del(endpoint, options).then((res) => {
            if (!res.error) {
            let newData = db.filter(el => el.id !== id);
            setDB(newData);
            } else {
                setError(res);
            };
        })
        } else {
            return;
        };
        
    };

    return (
        <div>
            <Navbar txtColor1="txtColor2" txtColor2="txtColor2" txtColor3="txtColor1" txtColor4="txtColor2" />
            <h2 className='txt-title'>CRUD with fetch and json server</h2>
            <CrudApiForm createData={createData} updateData={updateData} editData={editData} setEditData={setEditData} />
            {loading && <Loader />}
            <div className="ct-message">
                {error && <Message msg={`Error ${error.status}:${error.statusText}`} bgColor="#dc3545" />}
            </div>    
            {db && <CrudApiCards data={db} setEditData={setEditData} deleteData={deleteData} />}
        </div>
    )
}

export default CrudApi;