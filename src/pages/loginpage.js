import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { loginUserService } from '../services';
import '../styles/formularios.css';




const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleForm = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const data = await loginUserService({ email, password })
            console.log(data)
            login(data);
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    }
    return (
        <section className='homepage-head'>
            <form className='formulario' onSubmit={handleForm}>
                <h3>Login</h3>
                    <input className='form-input' type="email" id="email" name="email" placeholder='Ingrese su correo electrónico' required onChange={(e) => setEmail(e.target.value)} />
                    <input className='form-input' type="password" id="password" name="password" placeholder='Ingrese su contraseña' required onChange={(e) => setPassword(e.target.value)}/>
                    <button className='boton-login'>Login</button>
                    <p><Link to="/register">¿Aún no tienes cuenta?</Link></p>
                {error ? <p>{error}</p> : null}
            </form>
        </section>
    )
}
    
export default Login