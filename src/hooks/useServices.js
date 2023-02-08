import { useEffect, useState } from 'react';
import { loadAllServicesService } from '../services';

const useServices = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadServices = async () => {
            try {
                setLoading(true);
                
                const data = await loadAllServicesService();
                
                setServices(data);

            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        loadServices();
    }, []);

    return { services, loading, error };
};

export default useServices;
