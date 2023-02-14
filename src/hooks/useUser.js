import { useState, useEffect } from 'react';
import { loadUserDataService } from '../services';

const useUser = (id) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadUser = async () => {
            try {
                setLoading(true);

                const data = await loadUserDataService(id);

                setUser(data);

            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        loadUser();
    }, [id]);

    return { user, loading, error };
}

export default useUser;