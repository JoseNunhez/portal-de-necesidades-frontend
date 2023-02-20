import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Filtros } from "../components/filtros";
import ServicesList from "../components/servicesList";
import { AuthContext } from "../context/AuthContext";
import useServices from "../hooks/useServices";

const HomePage = () => {

    const [sort, setSort] = useState("");
    console.log(sort)
    const { services, loading, error, removeService } = useServices({sort});
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
                    <h2>Servicios ofertados</h2>
                    {(user ? <Link to="/service"><button>Crear un nuevo servicio</button></Link> : null)}
            </section>
            <Filtros sort={sort} setSort={setSort} />
                
            <section className="servicelist">
                <ServicesList services={services} removeService = {removeService} />
            </section>
        </section>
    );
}
export default HomePage