import { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import useUser from "../hooks/useUser"
import "../styles/user.css"

const UserPage = () => {
    const { id } = useParams()
    const { user, loading, error } = useUser(id)
    const { user: userLogged } = useContext(AuthContext)

    if (loading) return <p>Cargando...</p>
    if (error) return <p>{error}</p>

    return (
        <section className="carta-usuario">
            <h3>User {user.NOMBRE_USUARIO}</h3>
            {user.IMAGEN ? <img src={`${process.env.REACT_APP_API_URL_BD}/uploads/${user.IMAGEN}`} alt="imagen usuario" width="100px" /> : null}
            <p>Nombre de usuario: {user.NOMBRE_USUARIO}</p>
            <p>Email: {user.EMAIL}</p>
            <p>Biografia: {user.BIOGRAFIA} </p>
            <p>Activo desde: {new Date(user.CREATED_AT).toLocaleDateString()}</p>
            {userLogged && userLogged.ID === user.ID ? <Link to={`/actualizar/user/${id}`}>Actualiza tu perfil</Link> : null}
        </section>
    )
}

export default UserPage