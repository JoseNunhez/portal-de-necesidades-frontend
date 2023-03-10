import { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { deleteCommentService } from "../services";
import '../styles/botonesgenerales.css'
import '../styles/comment.css'

const Comment = ({ comment, removeComment }) => {
    const { user, token } = useContext(AuthContext);
    const [error, setError] = useState(null);


    const deleteComment= async (id) => {
        try {
            await deleteCommentService({ id, token });
            removeComment(id);
        } catch (error) {
            setError(error);
        }
    }


    return  (
        <article className="single-comment">
            <p>{comment.texto}</p>
            <p><Fragment>Publicado por <Link to={`/user/${comment.id_usuario}`}> {comment && comment.nombre_usuario !== null ? comment.nombre_usuario : ""} </Link></Fragment>
                <Link to={`/user/${comment.id_usuario}`} >{comment && comment.imagen ? <img src={`${process.env.REACT_APP_API_URL_BD}/uploads/files/${comment.imagen}`} alt="imagen usuario" width="30px" /> : null}</Link>en: {new Date (comment.fecha).toLocaleString()}</p>
            {user && user.ID === comment.id_usuario ? (
                <section>
                <button onClick={() => {if (window.confirm("Are you sure?")) deleteComment(comment.id)}}> ELIMINAR COMENTARIO </button>
                {error ? (<p>{error}</p>) : null}
            </section>
            ) : null}
        </article>
    ) 
}

export default Comment;