import axios from 'axios';
import React, {useState} from 'react';
import Navbar from '../../navbar';
import { serviceApi } from '../../../services/serviceApi';
import { useNavigate } from 'react-router-dom';


 const initialRegister = {
    name: "",
    email: "",
    password: "",
    error_list: []
};

function Signin() {

    const [register, setRegister] = useState(initialRegister);
    let navigate = useNavigate();

    let api = serviceApi();

    const handleInput = (e) => {
        e.persist();
        setRegister({
            ...register,
            [e.target.name]: e.target.value
        });
    }

    const registerSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: register.name,
            email: register.email,
            password: register.password
        }

        axios.get('/sanctum/csrf-cookie').then(res => {
            api.signin(data).then(res => {
                setRegister({ ...register, data });
                localStorage.setItem('auth_token', res.data.token);
                localStorage.setItem('auth_user', res.data.user.name);
                alert(res.data.msg);
                navigate('/crud-api', { replace: true });
            }).catch(error => {
                setRegister({ ...register, error_list: error.response.data.message })
                
            });
        }, [])
    }


    return (
        <div>
            <Navbar txtColor1="txtColor2" txtColor2="txtColor2" txtColor3="txtColor2" txtColor4="txtColor2" txtColor5="txtColor1"/>
            <h3 className='txt-title'>Sign in Page</h3>
            <div className='container py-5'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <h5 className='txt-title-form'>Please fill the form for registration</h5>
                            </div>
                            <div className='card-body'>
                                <form onSubmit={registerSubmit}>
                                    <div className='form-group mb-3'>
                                        <label className='txt-label-form'>Name</label>
                                        <input type="" name='name' onChange={handleInput} value={register.name} className='form-control' />
                                        <span className='error-register'>{register.error_list.name}</span>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label className='txt-label-form'>Email</label>
                                        <input type="" name='email' onChange={handleInput} value={register.email} className='form-control' />
                                        <span className='error-register'>{register.error_list.email}</span>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label className='txt-label-form'>Password</label>
                                        <input type="password" name='password' onChange={handleInput} value={register.password} className='form-control' />
                                        <span className='error-register'>{register.error_list.password}</span>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <button type='submit' className='bt-form-send'>Sign-in</button>
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

export default Signin;
