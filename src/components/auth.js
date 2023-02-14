import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

const Auth = () => {
    const { user, logout } = useContext(AuthContext);

    return user ? (
        <section className='auth-conectado'>
            <p>Conectado como {user.NOMBRE_USUARIO}</p>
            {user.IMAGEN ? <p><img className='header-user-image' src={`${process.env.REACT_APP_API_URL_BD}/uploads/${user.IMAGEN}`} alt="imagen usuario" width="30px"/></p> : null}
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