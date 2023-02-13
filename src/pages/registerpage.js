import { useState } from 'react'
import { registerUserService } from '../services';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');
    const [error, setError] = useState('');
    const [nameUser, setNameUser] = useState('');

    const handleForm = async (e) => {
        e.preventDefault();
        setError('');

        if (pass1 !== pass2) {
            setError('Las contraseñas no coinciden');
            return;
        }

        try {
            await registerUserService({ email, password: pass1, nameUser })
            navigate("/login");
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <section>
            <h2>Register</h2>
            <form onSubmit={handleForm}>
                <fieldset>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label htmlFor="name-user">Nombre de usuario: </label>
                    <input type="text" id="name-user" name="name-user" required onChange={(e) => setNameUser(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label htmlFor="pass1">Password: </label>
                    <input type="password" id="pass1" name="pass1" required onChange={(e) => setPass1(e.target.value)}/>
                </fieldset>
                <fieldset>
                    <label htmlFor="pass2">Repeat password: </label>
                    <input type="password" id="pass2" name="pass2" required onChange={(e) => setPass2(e.target.value)}/>
                </fieldset>

                <button>Register</button>
                {error ? <p>{error}</p> : null}
            </form>
        </section>
    )
}

export default Register