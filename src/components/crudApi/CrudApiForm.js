import React, { useState } from "react";
import Navbar from "../navbar";
import { serviceApi } from "../../services/serviceApi";
import { useNavigate } from "react-router-dom";
import back from "../../assets/ico/back.svg";

const initialForm = {
    title: '',
    user: ''
}

function CrudApiForm() {

    const [form, setForm] = useState(initialForm);
    const [image, setImage] = useState([]);
    const [error, setError] = useState([]);

    let navigate = useNavigate();

    let api = serviceApi();

    const handleChange = (e) => {
        e.persist();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const handleImage = (e) => {
        setImage({ image: e.target.files[0]})
    };

    const handleReset = (e) => {
        setForm(initialForm);
        setImage([]);
        setError([]);
    };

    const submitForm = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image.image);
        formData.append('title', form.title);
        formData.append('user', form.user);
        api.create(formData).then((res) => {
            alert(res.data.msg);
            setError([]);
            navigate('/crud-api');
        }).catch((error) => {
            setError(error.response.data.msg);
        })            
    };

    const getBack = () => {
        navigate('/crud-api');
    };
    

    return (
        <div>
            <Navbar txtColor1="txtColor2" txtColor2="txtColor2" txtColor3="txtColor2" txtColor4="txtColor2" txtColor5="txtColor1" />
            <div className="ct-form-create">
                <h3 className='txt-title'>Create an new Card</h3>
                <button className="bt-back" onClick={getBack}><img className="ico-back" src={back} alt="back button" /></button>
            </div>
            <div className='container py-5'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <h5 className='txt-title-form'>Please fill the form for create a card</h5>
                            </div>
                            <div className='card-body'>
                                <form onSubmit={submitForm}>
                                    <div className='form-group'>
                                        <label className='txt-label-form'>Title</label>
                                        <input type="text" name='title' onChange={handleChange} value={form.title} className='form-control' />
                                    </div>
                                    <span className="error-register">{ error.title }</span>
                                    <div className='form-group'>
                                        <label className='txt-label-form'>Image</label>
                                        <input type="file" name='image' value={form.image} onChange={handleImage} className='form-control' /> 
                                    </div>
                                    <span className="error-register">{ error.image }</span>
                                    <div className='form-group my-3'>
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

export default CrudApiForm;
