import { useParams } from 'react-router-dom';
import useSingleService from '../hooks/useSingleService';


const ServicePage = () => {
    const { id } = useParams();

    const { service, isLoading, error } = useSingleService(id);


    if (isLoading) return <p>Cargando...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <div>
            <h1>Unic Service Page</h1>
            <h2>{service.name}</h2>
            <p>Peso: {service.weight}</p>
            <img src={service.sprites.front_default} alt={service.name} />
        </div>
    );
}
    
export default ServicePage;