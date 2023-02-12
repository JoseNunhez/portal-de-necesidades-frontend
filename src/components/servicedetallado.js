import { Link } from "react-router-dom";
import Solucion from "./solucion";

const ServiceDetallado = ({ service }) => {
    console.log(service.soluciones)
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
        </article>
    );
}

export default ServiceDetallado;