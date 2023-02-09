import { useState, useEffect } from 'react';
import { loadServiceByIdService } from '../services';

const useSingleService = (id) => {
    const [service, setService] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchService = async () => {
            try {
                setIsLoading(true);
                const service = await loadServiceByIdService(id);
                setService(service);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchService();
    }, [id]);

    return { service, isLoading, error };
}

export default useSingleService;