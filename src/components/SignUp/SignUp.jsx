import { useContext, useState } from 'react';
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
const SignUp = () => {
    const [error, setError] = useState('')
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const from = '/'

    const updateUserProfile = (user, name) => {
        updateProfile(user, {
            displayName: name
        })
    }
    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const confirm = form.confirm.value
        console.log(email, password, confirm);
        setError('')
        if (password != confirm) {
            setError('Your password did not match')
            return
        }
        else if (password.length < 6) {
            setError('Password must contain 6 characters')
            return
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user
                updateUserProfile(loggedUser, name)
                navigate(from)
                form.reset()
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <div className='form-container'>
            <h4 className='form-title'>Sign up</h4>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="email">Name</label>
                    <input type="text" name='name' placeholder='Your name' required />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='Your email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='Your password' required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name='confirm' placeholder='Confirm password' required />
                    <small className='text-error'>{error}</small>
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
                <p><small>Already have an account?<Link to='/login'> Login</Link></small></p>
            </form>
        </div>
    );
};

export default SignUp;