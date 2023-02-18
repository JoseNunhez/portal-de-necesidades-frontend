import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { deleteCommentService } from "../services";
import '../styles/botonesgenerales.css'
import '../styles/comment.css'

const Comment = ({ comment, removeComment }) => {
    const { user, token } = useContext(AuthContext);
    const [error, setError] = useState(null);

    console.log("comentario", comment)

    const deleteComment= async (id) => {
        try {
            await deleteCommentService({ id, token });
            removeComment(id);
        } catch (error) {
            setError(error);
        }
    }
    return (
        <article className="single-comment">
            <p>{comment.TEXTO}</p>
            <p><div>Publicado por <Link to={`/user/${comment.ID_USUARIOS}`}> {user.NOMBRE_USUARIO} </Link></div>
                {user.IMAGEN ? <Link to={`/user/${comment.ID_USUARIOS}`} >{comment.IMAGEN ? <img src={`${process.env.REACT_APP_API_URL_BD}/uploads/${comment.IMAGEN}`} alt="imagen usuario" width="30px" /> : null}</Link> : null}</p>
            {user && user.ID === comment.ID_USUARIOS ? (
                <section>
                <button onClick={() => {if (window.confirm("Are you sure?")) deleteComment(comment.ID)}}> ELIMINAR COMENTARIO </button>
                {error ? (<p>{error}</p>) : null}
            </section>
            ) : null}
        </article>
    );
}

export default Comment;