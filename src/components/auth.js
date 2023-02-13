import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

const Auth = () => {
    const { user, logout } = useContext(AuthContext);

    return user ? (
        <section className='auth-conectado'>
            <p>Conectado como {user.NOMBRE_USUARIO}</p>
            <button onClick={logout}>Logout</button>
        </section>
    ) : (
        <ul>
            <Link to="/login"><li>Login</li></Link>
            <Link to="/register"><li>Register</li></Link>
        </ul>
    )
}

export default Auth