import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useComments } from "../hooks/useComments";
import { createCommentService, deleteService } from "../services";
import servicioDoneService from "../services/servicioDone";
import Comment from "./comment";
import { NoComments } from "./nocomments";

const Service = ({ service, removeService }) => {
    const id = service.ID
    const { user, token } = useContext(AuthContext);
    const [showComments, setShowComments] = useState(true);
    const [ comment , setComment ] = useState("");
    const { comments, addComment, removeComment} = useComments({ id, token });
    const { navigate } = useNavigate();
    const [error, setError] = useState("");

    const handleForm = async (e) => {
        e.preventDefault();

        try {
            const comentario = [await createCommentService({ id, token, texto: comment })];

            const mappedComment = comentario.map((comment) => ({
                id: comment.ID,
                texto: comment.TEXTO,
                fecha: new Date(),
                id_usuario: user.ID,
                nombre_usuario: user.NOMBRE_USUARIO,
                imagen: user.IMAGEN,
                nombre: user.NOMBRE,
            }));

            
            addComment(mappedComment[0]);

            e.target.reset();
        } catch (error) {
            setError(error.message);
        }
    }

    const servicioDone = async (id) => {
        try {
            await servicioDoneService({ id, token });
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    }

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
        <article className="servicio-individual">
            <h3>{service.TITULO}</h3>
            <p>Descripcion: {service.DESCRIPCION}</p>
            <p>Categoría: {service.CATEGORIAS}</p>
            <p>Subcategoría: {service.SUBCATEGORIAS}</p>
            <p>Precio ofertado: {service.PRECIO}</p>
            {service.FICHERO_DIGITAL ? (
                <p>Archivo adjunto:
                    <a href={`${process.env.REACT_APP_API_URL_BD}/uploads/files/${service.FICHERO_DIGITAL}`} target="_blank" rel="noreferrer">Ver contenido </a>
                    <a download={service.FICHERO_DIGITAL} href={`${process.env.REACT_APP_API_URL_BD}/uploads/files/${service.FICHERO_DIGITAL}`}  target="_blank" rel="noreferrer">Descargar</a>
                </p>
            ) : null}
            <p className="p-estado">Estado: {service.STATUS}</p>
            <p>Fecha de publicación: {new Date (service.CREATED_AT).toLocaleString()}</p>
            <Link to={`/service/${id}`}>Ver en detalle</Link>
            <Link className="boton-contratar" to={`/service/${id}/entrega`}>Entregar trabajo realizado</Link>
            <p>Publicado por: <a href={`/user/${service.ID_USUARIOS}`}>{service.NOMBRE_USUARIO}</a></p>
            {user && user.ID === service.ID_USUARIOS ? (
                <section>
                    <button onClick={() => {if (window.confirm("Are you sure?")) deleteServiceService(id)}}> Eliminar servicio </button>
                    {service.STATUS === "pendiente" ? <button onClick={() => { if (window.confirm("Are you sure?")) servicioDone(id) }}> Marcar como realizado </button> : null}
                    {error ? (<p>{error}</p>) : null}
                </section>
            ) : null}
            <h4>Comentarios:</h4>
            <form className="comment-form" onSubmit={handleForm}>
                <input className="service-input" type="text" placeholder="Escribe un comentario" name="comment" onChange={(e) => setComment(e.target.value)} />
                <button>Publicar</button>
            </form>
            {user ? (
            comments && comments.length > 0 ? (
                <section className="comments-servicio">
                    {showComments ? (
                    <>
                    {comments.map((comment) => (
                        <section key={comment.id + comment.fecha + comment.id_usuario}>
                            <Comment comment={comment} removeComment={removeComment} />
                        </section>))
                            }
                    </>) : null}    
                    <button onClick={()=> setShowComments(!showComments)}>{showComments ? "Ocultar" : "Mostrar"}({comments.length})</button>
                </section>
                ) : <p className="no-comments">Sin comentarios</p>
             ) : <NoComments />}
        </article>
    );
}

export default Service;