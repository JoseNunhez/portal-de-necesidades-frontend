import { useState } from 'react'
import { registerUserService } from '../services';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/formularios.css';

const Register = () => {
    const navigate = useNavigate();
    const [creating, setCreating] = useState(false);
    const [password, setPassword] = useState('');
    const [pass2, setPass2] = useState('');
    const [error, setError] = useState('');

    const handleForm = async (e) => {
        e.preventDefault();
        setError('');

        if (password !== pass2) {
            setError('Las contraseñas no coinciden');
            return;
        }

        try {
            setCreating(true);
            let data = new FormData(e.target);
            data.delete('pass2');
            await registerUserService({ data })
            navigate("/login");
        } catch (error) {
            setError(error.message);
        } finally {
            setCreating(false);
        }
    }

    return (
        <section className='homepage-head'>
            <form className='formulario' onSubmit={handleForm}>
                <h3>Formulario de registro</h3>
                    <input className='form-input' type="email" id="email" name="email" placeholder='Ingrese su correo electrónico' required />
                    <input className='form-input' type="text" id="nameUser" name="nameUser" placeholder='Ingrese su nombre de usuario' required  />
                    <input className='form-input' type="text" id="name" name="name" placeholder='Ingrese su nombre' required  />
                    <input className='form-input' type="password" id="password" name="password" placeholder='Ingrese su contraseña' required onChange={(e) => setPassword(e.target.value)} />
                    <input className='form-input' type="password" id="pass2" name="pass2" placeholder='Repita su contraseña' required onChange={(e) => setPass2(e.target.value)} />
                <button>Register</button>
                <p><Link to="/login">¿Ya tienes cuenta?</Link></p>

            </form>
                {creating ? <p>Creating user...</p> : null}
                {error ? <p>{error}</p> : null}
        </section>
    )
}

export default Register