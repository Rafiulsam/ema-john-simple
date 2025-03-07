import { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { Bounce, toast } from 'react-toastify';
const Login = () => {
    const [error, setError] = useState('')
    const [showPass, setShowPass] = useState(false)
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'
    const handleSignIn = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        setError('')
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                form.reset()
                navigate(from)
            })
            .catch(error => {
                 // Extract meaningful part of the error message
                const errorCode = error.code.split("/")[1].replace(/-/g, " ");
                const errorMessage = errorCode.charAt(0).toUpperCase() + errorCode.slice(1);
                setError(errorMessage)
                toast.error(errorMessage, {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            })
    }

    const handlePassShow = (e) => {
        e.preventDefault()
        setShowPass(!showPass)
    }

    return (
        <div className='form-container'>
            <h4 className='form-title'>Login</h4>
            <form onSubmit={handleSignIn}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='Your email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type={showPass ? "text" : "password"} name='password' placeholder='Your password' required />
                    <div className='showPass-btn' onClick={handlePassShow} role='button'>{showPass ? "Hide" : "Show"}  </div>
                </div>
                <small className='text-error'>{error}</small>
                <input className='btn-submit' type="submit" value="Login" />
                <p><small>Don't have an account <Link to='/signup'>Create new account</Link></small></p>
            </form>
        </div>
    );
};

export default Login;