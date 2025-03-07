import { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
const Header = () => {

    const { user, logOut } = useContext(AuthContext)
    console.log(user)

    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result);
            })
            .catch(error => { console.log(error) })
    }
    return (
        <nav className='header'>
            <Link to='/'>
                <img src={logo} alt="" />
            </Link>

            <div className='navLink'>
                <Link to="/">Home</Link>
                {/* <Link to="reviewitems">Review Items</Link> */}
                {/* <Link to="inventory">Inventory</Link> */}

                {
                    user ? <><span className='display-name'>{user.displayName}</span><button className='btn-sign-out' onClick={handleSignOut}>Sign Out  <FontAwesomeIcon icon={faArrowRightFromBracket} /></button> </> : <span><Link to="login">Login</Link>
                        <Link to="signup">Sign Up <FontAwesomeIcon icon={faArrowRightToBracket} /></Link></span>
                }
            </div>
        </nav>
    );
};

export default Header;