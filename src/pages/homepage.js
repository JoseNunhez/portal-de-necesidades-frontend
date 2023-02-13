import { useContext } from "react";
import { Link } from "react-router-dom";
import ServicesList from "../components/servicesList";
import { AuthContext } from "../context/AuthContext";
import useServices from "../hooks/useServices";

const HomePage = () => {

    const { services, loading, error } = useServices();
    const { user } = useContext(AuthContext);

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <section>
            <h2>Servicios ofrecidos</h2>
            {(user ? <Link to="/service"><button>Crear servicio</button></Link> : null)}
            <section className="servicelist">
                <ServicesList services={services} />
            </section>
        </section>
    );
}
export default HomePage