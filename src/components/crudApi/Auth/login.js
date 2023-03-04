import axios from 'axios';
import React, {useState} from 'react';
import Navbar from '../../navbar';
import { serviceApi } from '../../../services/serviceApi';
import { useNavigate } from 'react-router-dom';

const initialLogin = {
    email: "",
    password: "",
    error_list: []
};

function Login() {

    const [login, setLogin] = useState(initialLogin);
    //const [user, setUser] = useState(null);
    let navigate = useNavigate();

    let api = serviceApi();
    
    const handleInput = (e) => {
        e.persist();
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        });
    }

    const loginSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: login.email,
            password: login.password
        }

        axios.get('/sanctum/csrf-cookie').then(res => {
            api.login(data).then(res => {
                localStorage.setItem('auth_token', res.data.msg.token);
                localStorage.setItem('auth_user', res.data.msg.user.name);
                //setUser(res.data.msg.user.name);
                alert(res.data.msg.msg);
                navigate('/crud-api', { replace: true });
            }).catch(error => {
                setLogin({ ...login, error_list: error.response.data.msg })
            });
        }, [])
    }
    
    return (
        <div>
            <Navbar txtColor1="txtColor2" txtColor2="txtColor2" txtColor3="txtColor2" txtColor4="txtColor2" txtColor5="txtColor1"/>
            <h3 className='txt-title'>Log in Page</h3>
            <div className='container py-5'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <h5 className='txt-title-form'>Please fill the form for log in</h5>
                                {/* <span>{user}</span> */}
                            </div>
                            <div className='card-body'>
                                <form onSubmit={loginSubmit}>
                                    <span className='error-register'>{login.error_list.msg}</span>
                                    <div className='form-group mb-3'>
                                        <label className='txt-label-form'>Email</label>
                                        <input type="email" name='email' onChange={handleInput} value={login.email} className='form-control' />
                                        <span className='error-register'>{login.error_list.email}</span>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label className='txt-label-form'>Password</label>
                                        <input type="password" name='password' onChange={handleInput} value={login.password} className='form-control' />
                                        <span className='error-register'>{login.error_list.password}</span>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <button type='submit' className='bt-form-send'>Log-in</button>
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

export default Login;
