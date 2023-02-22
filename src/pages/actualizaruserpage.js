import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { updateUserService } from '../services';

import useUser from "../hooks/useUser"
import "../styles/user.css"

const ActualizarUserPage = () => {
    const { id } = useParams()
    const { user, loading: userLoading, error: userError } = useUser(id)
    const { user: userLogged, logout } = useContext(AuthContext)

    const [error, setError] = useState('');
    const { token } = useContext(AuthContext);
    const [updating, setUpdating] = useState(false);
    const [updatedUser, setUpdatedUser] = useState(false);
    
    if (userLoading) return <p>Cargando...</p>
    if (userError) return <p>{userError}</p>
    if (error) return <p>error</p>
    if (updating) return <p>Actualizando</p>
    if (updatedUser) return <p>Su usuario ha sido actualizado vuelva a Iniciar sesión <button onClick={logout}> Login </button></p>

    const handleForm = async (e) => {
        e.preventDefault();
        setError('');

        try {
            setUpdating(true);
            const data = new FormData(e.target);
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
                    placeholder="Escribe tu nuevo email" required/>
                </fieldset>
               <fieldset>
                <label htmlFor="nameUser">Nombre de usuario</label>
                <input className="form-input" type="text" id="nameUser" name="nameUser" placeholder="Escribe tu nombre" required/>
               </fieldset>
                <fieldset>
                <label htmlFor="biografia">Biografia</label>
                <input className="form-input" type="text" id="biografia" name="biografia" placeholder={user.BIOGRAFIA}/>
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Contraseña</label>
                <input className="form-input" type="password" id="password" name="password" placeholder="Nueva contraseña"/>
                </fieldset>
                <button>Actualizar</button>
            </form>
            <p>Activo desde: {new Date(user.CREATED_AT).toLocaleDateString()}</p>
            {userLogged && userLogged.ID === user.ID ? <Link to="/actualizar/user">Actualiza tu perfil</Link> : null}
        </section>
    ) 
}

export default ActualizarUserPage