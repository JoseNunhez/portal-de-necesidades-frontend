import { useParams } from 'react-router-dom';
import useSingleService from '../hooks/useSingleService';
import ServiceDatallado from '../components/servicedetallado';

const ServicePage = () => {
    const { id } = useParams();

    const { service, isLoading, error } = useSingleService(id);


    if (isLoading) return <p>Cargando...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <section>
            <h2>Unic Service Page</h2>
            <ServiceDatallado service={service}/>
        </section>
    );
}
    
export default ServicePage;