const Comment = ({ comment }) => {
    return (
        <article className="single-comment">
            <p>{comment.TEXTO}</p>
            <p>Publicado por el usuario con ID: {comment.ID_USUARIOS}</p>
        </article>
    );
}

export default Comment;