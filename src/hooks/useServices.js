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
        let sortedServices = [...services]
        if (sort === "publicacion") {
            sortedServices.sort((a, b) => new Date(a.CREATED_AT) - new Date(b.CREATED_AT));
        } else if (sort === "precio") {
            sortedServices.sort((a, b) => a.PRECIO - b.PRECIO);
        } else if (sort === "entrega") {
            sortedServices.sort((a, b) => b.FECHA_LIMITE - a.FECHA_LIMITE);
        } else if (sort === "") {
            return sortedServices
        }
        
        return sortedServices;
    }
    

    return { services: getSortedServices(services), loading, error, removeService };
};

export default useServices;
