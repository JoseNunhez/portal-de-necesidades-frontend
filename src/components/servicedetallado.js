import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { deleteService } from "../services";
import Solucion from "./solucion";

const ServiceDetallado = ({ service }) => {
    const { token, user } = useContext(AuthContext)
    const id = service.ID
    const [error, setError] = useState("");
    console.log(service.soluciones)
    const navigate = useNavigate();

    const deleteServiceService = async (id) => {
        try {
            await deleteService({ id, token });
            navigate("/");
            
        } catch (error) {
            setError(error.message);
        }
    }
    return (
        <article>
            <h3>{service.TITULO}</h3>
            <p>{service.DESCRIPCION}</p>
            <p>Categoría: {service.ID_CATEGORIAS}</p>
            <p>Subcategoría: {service.ID_SUBCATEGORIAS}</p>
            <p>Precio ofertado: {service.PRECIO}</p>
            <p>Estado: {service.STATUS}</p>
            <p>Fecha de publicación: {new Date(service.CREATED_AT).toLocaleString()}</p>
            <article>
                <h4>Soluciones:</h4>
                {service.SOLUCIONES.map((solucion) => (
                    <Solucion solucion={solucion} />
                ))}
            </article>
            <Link to={`/`}>Volver atrás</Link>
            {user && user.ID === service.ID_USUARIOS ? (
                <section>
                    <button onClick={() => {if (window.confirm("Are you sure?")) deleteServiceService(id)}}> ELIMINAR SERVICIO </button>
                    {error ? (<p>{error}</p>) : null}
                </section>
                ) : null}
        </article>
    );
}

export default ServiceDetallado;