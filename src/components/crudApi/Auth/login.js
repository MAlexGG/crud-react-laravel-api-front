import React from 'react';
import Navbar from '../../navbar';

function Login() {
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
                            </div>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group mb-3'>
                                        <label className='txt-label-form'>Email</label>
                                        <input type="" name='email' className='form-control' value='' />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label className='txt-label-form'>Password</label>
                                        <input type="" name='password' className='form-control' value='' />
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

export default Login
