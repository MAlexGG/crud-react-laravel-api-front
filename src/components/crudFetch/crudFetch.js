import React, {useEffect, useState} from "react";
import { serviceFetch } from "../../services/serviceFetch";
import Navbar from "../navbar";
import CrudFetchCards from "./crudFetchCards";
import CrudFetchForm from "./crudFetchForm";
import { Loader } from "./loader";
import { Message } from "./message";

const CrudFetch = () => {

    const [db, setDB] = useState(null);
    const [editData, setEditData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    let api = serviceFetch();

    useEffect(() => {
        setLoading(true);
        api.get().then((res) => {
            if (!res.err) {
                setDB(res);
                setError(null);
            } else {
                setDB(null);
                setError(res);
            }
            setLoading(false);
        })
    }, [api.url])

    const createData = (data) => {
        data.id = Date.now();
        let options = {
            body: data,
            headers: { "content-type": "application/json" }
        };

        api.post(options).then((res) => {
            if (!res.err) {
                setDB([...db, res]) 
            } else {
                setError(res);
            }
        });
    }
    
    const updateData = (data) => {
        let options = {
            body: data,
            headers: { "content-type": "application/json" }
        };

        api.put(data, options).then((res) => {
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
            let options = {
            headers: { "content-type": "application/json" }
            }; 
            
            api.del(id, options).then((res) => {
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
            <Navbar txtColor1="txtColor2" txtColor2="txtColor2" txtColor3="txtColor1" txtColor4="txtColor2" txtColor5="txtColor2" />
            <h2 className='txt-title'>CRUD with fetch and json server</h2>
            <CrudFetchForm createData={createData} updateData={updateData} editData={editData} setEditData={setEditData} />
            {loading && <Loader />}
            <div className="ct-message">
                {error && <Message msg={`Error ${error.status}:${error.statusText}`} bgColor="#dc3545" />}
            </div>    
            {db && <CrudFetchCards data={db} setEditData={setEditData} deleteData={deleteData} />}
        </div>
    )
}

export default CrudFetch;