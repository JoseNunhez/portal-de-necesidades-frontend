import { useContext } from "react";
import { Link } from "react-router-dom";
import ServicesList from "../components/servicesList";
import { AuthContext } from "../context/AuthContext";
import useServices from "../hooks/useServices";

const HomePage = () => {

    const { services, loading, error, removeService } = useServices();
    const { user } = useContext(AuthContext);

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <section>
            <section className="homepage-head">
                <h2>Servicios ofrecidos</h2>
                {(user ? <Link to="/service"><button>Crear un nuevo servicio</button></Link> : null)}
            </section>
            <section className="servicelist">
                <ServicesList services={services} removeService = {removeService} />
            </section>
        </section>
    );
}
export default HomePage