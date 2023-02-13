import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

const Auth = () => {
    const {token} = useContext(AuthContext);
    return (
        <ul>
            <Link to="/login"><li>Login</li></Link>
            <Link to="/register"><li>Register</li></Link>
            <li style={{color: "black"}}>Token: {token}</li>
        </ul>
    )
}

export default Auth