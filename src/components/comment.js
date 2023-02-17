import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { deleteCommentService } from "../services";

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
    return (
        <article className="single-comment">
            <p>{comment.TEXTO}</p>
            <p>Publicado por el usuario con ID: {comment.ID_USUARIOS}</p>
            {user && user.ID === comment.ID_USUARIOS ? (
                <section>
                <button onClick={() => {if (window.confirm("Are you sure?")) deleteComment(comment.ID)}}> ELIMINAR SERVICIO </button>
                {error ? (<p>{error}</p>) : null}
            </section>
            ) : null}
        </article>
    );
}

export default Comment;