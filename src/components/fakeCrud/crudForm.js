import React, { useState, useEffect } from 'react';

const initialForm = {
    imgName: "",
    imgUser: "",
    imgURL: "",
    id: null
};

const CrudForm = ({createData, updateData, editData, setEditData}) => {

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
            createData(form)
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
                    aria-label="imgName" 
                    name="imgName"
                    placeholder='Image name'
                    onChange={handleChange}
                    value={form.imgName}
                    className='inpt-create'
                />
                <input
                    type="text"
                    aria-label="imgUser"
                    name="imgUser"
                    placeholder='Image user'
                    onChange={handleChange}
                    value={form.imgUser}
                    className='inpt-create'
                />
                <input
                    type="text"
                    aria-label="imgURL"
                    name="imgURL"
                    placeholder='Image URL'
                    onChange={handleChange}
                    value={form.imgURL}
                    className='inpt-create'
                />
                <div className='bt-group'>
                    <button type="submit" className='bt-form-send'>send</button>
                    <button type="reset" onClick={handleReset} className='bt-form-reset'>reset</button>
                </div>
            </form>
        </div>
    )
}

export default CrudForm;   
