import React, { useState, useEffect } from 'react';

const initialForm = {
    imgName: "",
    imgUser: "",
    imgURL: "",
    id: null
};

const CrudFetchForm = ({createData, updateData, editData, setEditData}) => {

    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        if (editData) {
            setForm(editData);
        } else {
            setForm(initialForm);
        }
    }, [editData])


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.imgName || !form.imgUser || !form.imgURL) {
            alert('Incomplete Data!');
            return;
        }

        if (form.id === null) {
            createData(form);
        } else {
            updateData(form);
        }

        handleReset();
    }
    
    const handleReset = (e) => {
        setForm(initialForm);
        setEditData(null);
    } 
    

    return (
        <div className='ct-form'>
            <h3 className='txt-subtitle'>{ editData ? "Edit an Image" : "Add an Image"}</h3>
            <form onSubmit={handleSubmit} className='form-create'>
                <input
                    type="text"
                    name="imgName"
                    placeholder='Image name'
                    onChange={handleChange}
                    value={form.imgName}
                    className='inpt-create'
                />
                <input
                    type="text"
                    name="imgUser"
                    placeholder='Image user'
                    onChange={handleChange}
                    value={form.imgUser}
                    className='inpt-create'
                />
                <input
                    type="text"
                    name="imgURL"
                    placeholder='Image URL'
                    onChange={handleChange}
                    value={form.imgURL}
                    className='inpt-create'
                />
                <input type="submit" value="send" className='bt-form-send' />
                <input type="reset" value="reset" onClick={handleReset} className='bt-form-reset' />
            </form>
        </div>
    )
}

export default CrudFetchForm;   
