import React, { useState, useEffect} from "react";
import Navbar from "../navbar";
import { serviceApi } from "../../services/serviceApi";
import { useNavigate, useParams } from "react-router-dom";
import back from "../../assets/ico/back.svg";


function CrudEditApiForm() {

    const [form, setForm] = useState([]);
    const [image, setImage] = useState([]);
    const [error, setError] = useState([]);

    let api = serviceApi();
    let navigate = useNavigate();
    let params = useParams();

    useEffect(() => {
        const cardId = params.id;
        api.show(cardId).then((res) => {
            setForm(res.data.data);
            setImage(res.data.data.image);
        }).catch((error) => {
            alert(`Error ${error.response.status}. Sorry, ${error.response.statusText}`)
            alert(error.response.data.msg);
            navigate('/crud-api');
        });
    }, [params.id]);

    const handleChange = (e) => {
        e.persist();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const handleImage = (e) => {
        e.persist();
        if (image != `img/${e.target.files[0].name}`) {
            setImage({ image: e.target.files[0] });
        } else {
            setImage({image: image});
        }
    };

    const handleReset = (e) => {
        setForm([]);
        setError([]);
    };

    const getBack = () => {
        navigate('/crud-api');
    };
    const updateCard = (e) => {
        e.preventDefault();
        const cardId = params.id;
        const formData = new FormData();
        if (typeof image === 'string') {
            formData.append('image', image);
        } else {
            formData.append('image', image.image);
        } 
        formData.append('title', form.title);
        formData.append('description', form.description);
        //formData.append('user', form.user);
        api.update(cardId, formData).then((res) => {
            alert(res.data.msg);
            setError([]);
            navigate('/crud-api');
        }).catch((error) => {
            alert(`Error ${error.response.status}. Sorry, ${error.response.statusText}`)
            setError(error.response.data.msg);
        });
    };

    return (
        <div>
            <Navbar txtColor1="txtColor2" txtColor2="txtColor2" txtColor3="txtColor2" txtColor4="txtColor2" txtColor5="txtColor1" />
            <div className="ct-form-create">
                <h3 className='txt-title'>Edit the selected Card</h3>
                <button className="bt-back" onClick={getBack}><img className="ico-back" src={back} alt="back button" /></button>
            </div>
            <div className='container py-5'>
                <div className='row justify-content-center'>
                    <div className='col-lg-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <h5 className='txt-title-form'>Please fill the form to edit the selected card</h5>
                            </div>
                            <div className='card-body'>
                                <form onSubmit={updateCard} encType="multipart/form-data">
                                    <div className='form-group'>
                                        <label className='txt-label-form'>Title</label>
                                        <input type="text" name='title' onChange={handleChange} value={form.title ?? ""} className='form-control' />
                                    </div>
                                    <span className="error-register">{error.title}</span>
                                    <div className='form-group'>
                                        <label className='txt-label-form'>Description</label>
                                        <textarea type="text" name='description' onChange={handleChange} value={form.description ?? ""} className='form-control txtArea' />
                                    </div>
                                    <span className="error-register">{error.description}</span>
                                    <div className='form-group'>
                                        <label className='txt-label-form'>Image</label>
                                        <input type='file' name='image' onChange={handleImage} className='form-control'/> 
                                        <img src={`http://${api.baseUrl}/storage/${image}`} alt={form.title} width="100px" />
                                    </div>
                                    <span className="error-register">{error.image}</span>
                                    <div className='form-group my-3'>
                                        <button type='submit' className='bt-form-send'>Update</button>
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

export default CrudEditApiForm;
