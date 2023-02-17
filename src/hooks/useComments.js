import { useEffect, useState } from "react";
import { loadCommentsService } from "../services";

const useComments = (id, token) => {
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const loadComments = async () => {
            try {
                setLoading(true);

                const data = await loadCommentsService(id, token);

                setComments(data);

            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        loadComments();
    }, [id, token]);

    const addComment = (comment) => {
        setComments([...comments, comment]);
    }

    const removeComment = (id) => {
        setComments(comments.filter((comment) => comment.ID !== id));
    };
    
    return { comments, loading, error, addComment, removeComment };
}
    
export default useComments;