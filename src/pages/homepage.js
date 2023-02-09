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
            <h1>Servicios ofrecidos</h1>
            <article>
                <ServicesList services={services} />
            </article>
        </section>
    );
}
export default HomePage