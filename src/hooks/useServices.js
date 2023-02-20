import { useEffect, useState } from 'react';
import { loadAllServicesService } from '../services';

const useServices = ({sort}) => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadServices = async () => {
            try {
                setLoading(true);
                
                const data = await loadAllServicesService();
                console.log("hace fetch")
                
                setServices(data);

            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        loadServices();
    }, []);
    const removeService = (id) => {
        setServices(services.filter((service) => service.ID !== id));
    };
    const getSortedServices = () => {
        const sortedServices = sort
            ? [...services].sort((a, b) => new Date(a.CREATED_AT) - new Date(b.CREATED_AT))
            : services;
        
        return sortedServices;
    }
    

    return { services: getSortedServices(services), loading, error, removeService };
};

export default useServices;
