import ServicesList from "../components/servicesList";
import useServices from "../hooks/useServices";

const HomePage = () => {

    const { services, loading, error } = useServices();

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <section>
            <h2>Servicios ofrecidos</h2>
            <section>
                <ServicesList services={services} />
            </section>
        </section>
    );
}
export default HomePage