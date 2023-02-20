import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import '../styles/botonesgenerales.css'
import '../styles/header.css'

const Auth = () => {
    const { user, logout } = useContext(AuthContext);

    return user ? (
        <section className='auth-conectado'>
            <p>Conectado como <Link className='user-header' to={`/user/${user.ID}`}>{user.NOMBRE_USUARIO}</Link></p>
            {user.IMAGEN ? <p><img className='header-user-image' src={`${process.env.REACT_APP_API_URL_BD}/uploads/${user.IMAGEN}`} alt="imagen usuario" width="30px"/></p> : null}
            <button onClick={logout}>Logout</button>
        </section>
    ) : (
        <ul>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/register"><button>Register</button></Link>
        </ul>
    )
}

export default Auth