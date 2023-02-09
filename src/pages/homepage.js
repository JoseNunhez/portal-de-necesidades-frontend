import ServicesList from "../components/servicesList";
import useServices from "../hooks/useServices";

const HomePage = () => {

    const { services, loading, error } = useServices();
    console.log(services)

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <section>
            <h2>Servicios ofrecidos</h2>
            <article>
                <ServicesList services={services} />
            </article>
        </section>
    );
}
export default HomePage