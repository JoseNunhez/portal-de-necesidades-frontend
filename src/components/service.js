import { Link } from "react-router-dom";

const Service = ({ service }) => {
    const id = service.ID
    console.log(service)
    return (
        <article>
            <h3>{service.TITULO}</h3>
            <p>{service.DESCRIPCION}</p>
            <p>Categoría: {service.ID_CATEGORIAS}</p>
            <p>Subcategoría: {service.ID_SUBCATEGORIAS}</p>
            <p>Precio ofertado: {service.PRECIO}</p>
            {service.FICHERO_DIGITAL ? (
                <p>Archivo adjunto:
                    <a href={`${process.env.REACT_APP_API_URL_BD}/uploads/files/${service.FICHERO_DIGITAL}`} target="_blank" rel="noreferrer">Ver contenido </a>
                    <a download={service.FICHERO_DIGITAL} href={`${process.env.REACT_APP_API_URL_BD}/uploads/files/${service.FICHERO_DIGITAL}`}  target="_blank" rel="noreferrer">Descargar</a>
                </p>
            ) : null}
            <p>Estado: {service.STATUS}</p>
            <p>Fecha de publicación: {new Date (service.CREATED_AT).toLocaleString()}</p>
            <Link to={`/service/${id}`}>Ver detalles</Link>
        </article>
    );
}

export default Service;