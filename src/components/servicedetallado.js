import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import useComments from "../hooks/useComments";
import { deleteService } from "../services";
import Comment from "./comment";
import Solucion from "./solucion";

const ServiceDetallado = ({ service }) => {
    const { token, user } = useContext(AuthContext)
    const id = service.ID
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { comments } = useComments(id, token);

    const deleteServiceService = async (id) => {
        try {
            await deleteService({ id, token });
            navigate("/");
            
        } catch (error) {
            setError(error.message);
        }
    }
    return (
        <article className="servicio-individual">
            <h3>{service.TITULO}</h3>
            <p>Descripcion: {service.DESCRIPCION}</p>
            <p>Categoría: {service.ID_CATEGORIAS}</p>
            <p>Subcategoría: {service.ID_SUBCATEGORIAS}</p>
            <p>Precio ofertado: {service.PRECIO}</p>
            <p>Estado: {service.STATUS}</p>
            <p>Fecha de publicación: {new Date(service.CREATED_AT).toLocaleString()}</p>
            <article>
                <h4>Soluciones:</h4>
                {service.SOLUCIONES.map((solucion) => (
                    <Solucion solucion={solucion} />
                ))}
            </article>
            <p><Link to={`/`}>Volver atrás</Link></p>
            {user && user.ID === service.ID_USUARIOS ? (
                <section>
                    <button onClick={() => {if (window.confirm("Are you sure?")) deleteServiceService(id)}}> ELIMINAR SERVICIO </button>
                    {error ? (<p>{error}</p>) : null}
                </section>
            ) : null}
            <p><Link to={`/service/${id}`}>Ver detalles </Link></p>
            <p>Publicado por: <a href={`/user/${service.ID_USUARIOS}`}>{service.NOMBRE_USUARIO}</a></p>
            {user && user.ID === service.ID_USUARIOS ? (
                <section>
                    <button onClick={() => {if (window.confirm("Are you sure?")) deleteServiceService(id)}}> ELIMINAR SERVICIO </button>
                    {error ? (<p>{error}</p>) : null}
                </section>
            ) : null}
            <h4>COMENTARIOS:</h4>
            <form className="comment-form">
            <input className="service-input" type="text" placeholder="Escribe un comentario" />
                <button>Publicar</button>
            </form>
            
            {comments && comments.length > 0 ? (
                <section className="comments-servicio">
                    {comments.map((comment) => (
                        <section key={comment.id + comment.fecha + comment.id_usuario}>
                            <Comment comment={comment} />
                        </section>))}
                    <button>Ver comentarios({comments.length})</button>
                </section>
            ) : <p className="no-comments">Sin comentarios</p>}
        </article>
    );
}

export default ServiceDetallado;