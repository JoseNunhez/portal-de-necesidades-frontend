import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { updateUserService } from '../services';


import useUser from "../hooks/useUser"
import "../styles/user.css"

const ActualizarUserPage = () => {
    const { id } = useParams()
    const { user, loading: userLoading } = useUser(id)
    const { setToken, setUser } = useContext(AuthContext)

    const [error, setError] = useState('');
    const { token } = useContext(AuthContext);
    const [updating, setUpdating] = useState(false);
    const [updatedUser, setUpdatedUser] = useState(false);

    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [nameUser, setNameUser ] = useState();
    const [biografia, setBiografia] = useState();
    const [password, setPassword] = useState();
    const [pass2, setPass2] = useState('');
        
    useEffect(() => {
        if (!user) return;
        setEmail(user.EMAIL);
        setName(user.NOMBRE);
        setNameUser(user.NOMBRE_USUARIO);
        setBiografia(user.BIOGRAFIA);
        setPassword(user.CONTRASENHA);
    }, [user])

    if (userLoading) return <p>Cargando...</p>
    if (updating) return <p>Actualizando</p>
    if (updatedUser) {
        setToken('');
        setUser(null);
        return <p>Su usuario ha sido actualizado vuelva a Iniciar sesión</p>
    }
    
    
    const handleForm = async (e) => {
        e.preventDefault();
        setError('');

        if (password !== pass2) {
            setError('Las contraseñas no coinciden');
            return;
        }

        try {
            setUpdating(true);
            const data = { email, name, nameUser,  biografia, password }
            await updateUserService({ token, data });
            setUpdatedUser(true);
            
        } catch (error) {
            setError(error.message);
        } finally {
            setUpdating(false);
        }
    }
    
    
    return (
        <section className="carta-usuario">
            <h3>User {user.NOMBRE_USUARIO}</h3>
            {user.IMAGEN ? <img src={`${process.env.REACT_APP_API_URL_BD}/uploads/${user.IMAGEN}`} alt="imagen usuario" width="100px" /> : null}
            <form className="formulario" onSubmit={handleForm}>
                <fieldset>
                    <label htmlFor="email">Email</label>
                    <input 
                    className="form-input" 
                    type="email" 
                    id="email" 
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Correo electrónico" required/>
                </fieldset>
               <fieldset>
                <label htmlFor="nameUser">Nombre</label>
                <input className="form-input" type="text" id="name" name="name" placeholder="Nombre" value={name}
                    onChange={(e) => setName(e.target.value)} required/>
               </fieldset>
               <fieldset>
                <label htmlFor="nameUser">Nombre de usuario</label>
               <input className='form-input' type="text" id="nameUser" name="nameUser" placeholder='Ingrese su nombre de usuario' value={nameUser}
                    onChange={(e) => setNameUser(e.target.value)} />
               </fieldset>
                <fieldset>
                <label htmlFor="biografia">Biografia</label>
                <input className="form-input" type="text" id="biografia" name="biografia" placeholder={user.BIOGRAFIA} value={biografia}
                    onChange={(e) => setBiografia(e.target.value)}/>
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Contraseña</label>
                <input className="form-input" type="password" id="password" name="password" placeholder="Nueva contraseña" value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Repita su contraseña</label>
                <input className="form-input" type="password" id="pass2" name="pass2" placeholder="Repita su contraseña" 
                    onChange={(e) => setPass2(e.target.value)}/>
                </fieldset>
                <button>Actualizar</button>
            </form>
            <p>Activo desde: {new Date(user.CREATED_AT).toLocaleDateString()}</p>
            {error ? <p>{error}</p>: null} 
        </section>
    ) 
}

export default ActualizarUserPage