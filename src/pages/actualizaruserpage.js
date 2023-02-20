import { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import useUser from "../hooks/useUser"
import "../styles/user.css"

const ActualizarUserPage = () => {
    const { id } = useParams()
    const { user, loading, error } = useUser(id)
    const { user: userLogged } = useContext(AuthContext)

    if (loading) return <p>Cargando...</p>
    if (error) return <p>{error}</p>

    return  (
        <section className="carta-usuario">
            <h3>User {user.NOMBRE_USUARIO}</h3>
            <p>FALTA IMPLEMENTAR CON useForms HOOKS, PENDIENTE</p>
            {user.IMAGEN ? <img src={`${process.env.REACT_APP_API_URL_BD}/uploads/${user.IMAGEN}`} alt="imagen usuario" width="100px" /> : null}
            <form className="formulario">
                <input className="form-input" type="email" id="email" name="email" placeholder={user.EMAIL ? user.EMAIL : "Escribe tu nuevo email"} required/>
                <input className="form-input" type="text" id="nameUser" name="nameUser" placeholder={user.NOMBRE && user.NOMBRE > 0 ? user.NOMBRE : "Escribe tu nombre"} value="jose" required/>
                <input className="form-input" type="text" id="biografia" name="biografia" placeholder={user.BIOGRAFIA}/>
                <input className="form-input" type="password" id="password" name="password" placeholder="Nueva contraseña"/>
                <button>Actualizar</button>
            </form>
            <p>Activo desde: {new Date(user.CREATED_AT).toLocaleDateString()}</p>
            {userLogged && userLogged.ID === user.ID ? <Link to="/actualizar/user">Actualiza tu perfil</Link> : null}
        </section>
    ) 
}

export default ActualizarUserPage