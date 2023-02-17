import { useParams } from "react-router-dom"
import useUser from "../hooks/useUser"
import "../styles/user.css"

const UserPage = () => {
    const { id } = useParams()
    const { user, loading, error } = useUser(id)

    if (loading) return <p>Cargando...</p>
    if (error) return <p>{error}</p>

    return (
        <section className="carta-usuario">
            <h3>User {user.NOMBRE_USUARIO}</h3>
            {user.IMAGEN ? <img src={`${process.env.REACT_APP_API_URL_BD}/uploads/${user.IMAGEN}`} alt="imagen usuario" width="100px" /> : null}
            <p>Email: {user.EMAIL}</p>
            <p>User id: {user.ID}</p>
            <p>Nombre: {user.NOMBRE}</p>
            <p>Activo desde: {new Date(user.CREATED_AT).toLocaleDateString()}</p>
        </section>
    )
}

export default UserPage