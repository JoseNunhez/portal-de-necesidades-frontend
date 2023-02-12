import { Link } from "react-router-dom";

const Service = ({ service }) => {
    const id = service.ID
    return (
        <article>
            <h3>{service.TITULO}</h3>
            <p>{service.DESCRIPCION}</p>
            <p>Categoría: {service.ID_CATEGORIAS}</p>
            <p>Subcategoría: {service.ID_SUBCATEGORIAS}</p>
            <p>Precio ofertado: {service.PRECIO}</p>
            <p>Estado: {service.STATUS}</p>
            <p>Fecha de publicación: {new Date (service.CREATED_AT).toLocaleString()}</p>
            <Link to={`/service/${id}`}>Ver detalles</Link>
        </article>
    );
}

export default Service;