import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
            <h4 className='form-title'>Login</h4>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='Your email' required  />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='Your password' required  />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
                <p><small>New to ema-john? <Link to='/signup'>Create new account</Link></small></p>
            </form>
        </div>
    );
};

export default Login;