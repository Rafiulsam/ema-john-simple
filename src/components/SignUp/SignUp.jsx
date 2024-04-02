import React, { useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
const SignUp = () => {
    const [error, setError] = useState('')

    const handleSignUp = event=>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value 
        const password = form.password.value
        const confirm = form.confirm.value
        console.log(email, password, confirm);

        if(password != confirm){
            setError('Your password did not match')
            return
        }
        else if(password.length < 6){
            setError('Password must contain 6 characters')
            return
        }
    }

    return (
        <div className='form-container'>
            <h4 className='form-title'>Sign up</h4>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='Your email' required  />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='Your password' required  />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name='confirm' placeholder='Confirm password' required  />
                <small>{error}</small>
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
                <p><small>Already have an account?<Link to='/signup'> Login</Link></small></p>
            </form>
        </div>
    );
};

export default SignUp;