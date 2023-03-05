import { useEffect, useState } from "react";
import loadComments from "../services/loadcomments";

export function useComments({id, token}) {
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const gettingComments = async () => {
            try {
                setLoading(true);
                setError(null);
                const newComments = await loadComments({ id, token });
                setComments(newComments);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        gettingComments();
    }, [id, token]);

    const addComment = (data) => {
        setComments([data, ...comments]);
    }

    const removeComment = (id) => {
        setComments(comments.filter((comment) => comment.id !== id));
    };

    
    return { comments, loading, error, addComment, removeComment};
}