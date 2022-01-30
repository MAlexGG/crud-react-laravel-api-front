import React, { useState } from "react";
import Navbar from "../navbar";

const initialForm = {
    title: '',
    image: '',
    user: ''
}


function Create() {

    const [form, setForm] = useState(initialForm);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleReset = (e) => {
        setForm(initialForm);
    } 

    return (
        <div>
            <Navbar txtColor1="txtColor2" txtColor2="txtColor2" txtColor3="txtColor2" txtColor4="txtColor2" txtColor5="txtColor1" />
            <h3 className='txt-title'>Create an new Card</h3>
            <div className='container py-5'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <h5 className='txt-title-form'>Please fill the form for create a card</h5>
                            </div>
                            <div className='card-body'>
                                <form>
                            
                                    <div className='form-group mb-3'>
                                        <label className='txt-label-form'>Title</label>
                                        <input type="text" name='title' onChange={handleChange} value={form.title} className='form-control' />
    
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label className='txt-label-form'>Image</label>
                                        <input type="file" name='image' value={form.image} onChange={handleChange} className='form-control' />
                                        
                                    </div>
                                    <div className='form-group mb-3'>
                                        <button type='submit' className='bt-form-send'>Create</button>
                                        <button type="reset" className='bt-form-reset' onClick={handleReset}>Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create;
