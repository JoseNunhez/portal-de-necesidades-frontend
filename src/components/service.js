import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import useComments from "../hooks/useComments";
import { createCommentService, deleteService } from "../services";
import Comment from "./comment";

const Service = ({ service, removeService }) => {
    const id = service.ID
    const { user, token } = useContext(AuthContext);
    const [showComments, setShowComments] = useState(true);
    const [ comment , setComment ] = useState("");
    const { comments, addComment, removeComment } = useComments(id, token);
    const { navigate } = useNavigate();
    const [error, setError] = useState("");

    const handleForm = async (e) => {
        e.preventDefault();

        try {
            const comentario = await createCommentService({ id, token, texto: comment });
            
            addComment(comentario);

            e.target.reset();
        } catch (error) {
            setError(error.message);
            console.log(error.message)
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
            <h4>COMENTARIOS:</h4>
            <form className="comment-form" onSubmit={handleForm}>
                <input className="service-input" type="text" placeholder="Escribe un comentario" name="comment" onChange={(e) => setComment(e.target.value)} />
                <button>Publicar</button>
            </form>
            
            {comments && comments.length > 0 ? (
                <section className="comments-servicio">
                    {showComments ? (
                    <>
                    {comments.map((comment) => (
                        <section key={comment.ID + comment.CREATED_AT + comment.ID_USUARIOS}>
                            <Comment comment={comment} removeComment={removeComment} />
                        </section>))
                            }
                    </>) : null}    
                    <button onClick={()=> setShowComments(!showComments)}>{showComments ? "Ocultar" : "Mostrar"}({comments.length})</button>
                </section>
            ) : <p className="no-comments">Sin comentarios</p>}
        </article>
    );
}

export default Service;