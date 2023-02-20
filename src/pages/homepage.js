import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ServicesList from "../components/servicesList";
import { AuthContext } from "../context/AuthContext";
import useServices from "../hooks/useServices";

const HomePage = () => {

    const [sort, setSort] = useState(false);
    const { services, loading, error, removeService } = useServices({sort});
    const { user } = useContext(AuthContext);

    const handleSort = () => {
        setSort(!sort);
    }

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <section>
            <section className="homepage-head">
                <h2>Servicios ofertados</h2>
                <section className="filtros-servicios">
                    <p>Ordenar por fecha de publicación<input type="checkbox" onChange={handleSort} checked={sort} /></p>
                </section>
                {(user ? <Link to="/service"><button>Crear un nuevo servicio</button></Link> : null)}
            </section>
            <section className="servicelist">
                <ServicesList services={services} removeService = {removeService} />
            </section>
        </section>
    );
}
export default HomePage