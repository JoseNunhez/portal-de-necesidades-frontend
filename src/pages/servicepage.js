import { useParams } from 'react-router-dom';
import useSingleService from '../hooks/useSingleService';

const ServicePage = () => {
    const { id } = useParams();

    const { service, isLoading, error } = useSingleService(id);


    if (isLoading) return <p>Cargando...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <section>
            <h2>Unic Service Page</h2>
            <h3>{service.name}</h3>
            <p>Peso: {service.weight}</p>
            <img src={service.sprites.front_default} alt={service.name} />
        </section>
    );
}
    
export default ServicePage;