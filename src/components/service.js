import { Link } from "react-router-dom";

const Service = ({ service }) => {
    const id = service.name
    return (
        <article>
            <p>{service.name}</p>
            <Link to={`/service/${id}`}>Ver detalles</Link>
        </article>
    );
}

export default Service;