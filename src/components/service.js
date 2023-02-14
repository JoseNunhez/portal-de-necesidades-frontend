import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { deleteService } from "../services";

const Service = ({ service, removeService }) => {
    const { user, token } = useContext(AuthContext);
    const { navigate } = useNavigate();
    const [error, setError] = useState("");
    const id = service.ID
    console.log(service)

    const deleteServiceService = async (id) => {
        try {
            await deleteService({ id, token });

            if (removeService) {
                removeService(id);
            } else {
                navigate("/");
            }
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <article>
            <h3>{service.TITULO}</h3>
            <p>{service.DESCRIPCION}</p>
            <p>Categoría: {service.ID_CATEGORIAS}</p>
            <p>Subcategoría: {service.ID_SUBCATEGORIAS}</p>
            <p>Precio ofertado: {service.PRECIO}</p>
            {service.FICHERO_DIGITAL ? (
                <p>Archivo adjunto:
                    <a href={`${process.env.REACT_APP_API_URL_BD}/uploads/files/${service.FICHERO_DIGITAL}`} target="_blank" rel="noreferrer">Ver contenido </a>
                    <a download={service.FICHERO_DIGITAL} href={`${process.env.REACT_APP_API_URL_BD}/uploads/files/${service.FICHERO_DIGITAL}`}  target="_blank" rel="noreferrer">Descargar</a>
                </p>
            ) : null}
            <p>Estado: {service.STATUS}</p>
            <p>Fecha de publicación: {new Date (service.CREATED_AT).toLocaleString()}</p>
            <p><Link to={`/service/${id}`}>Ver detalles </Link></p>
            <p>Publicado por: <a href={`/user/${service.ID_USUARIOS}`}>{service.NOMBRE_USUARIO}</a></p>
            {user && user.ID === service.ID_USUARIOS ? (
                <section>
                    <button onClick={() => {if (window.confirm("Are you sure?")) deleteServiceService(id)}}> ELIMINAR SERVICIO </button>
                    {error ? (<p>{error}</p>) : null}
                </section>
                ) : null}
        </article>
    );
}

export default Service;