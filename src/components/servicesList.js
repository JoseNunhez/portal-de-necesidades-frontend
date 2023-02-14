import Service from "./service";

const ServicesList = ({ services, removeService }) => {
    return services.length ? (
        <ul className="services-list">
            {services.map((service) => (
                <li key={service.ID}>
                    <Service service={service} removeService={removeService} />
                </li>
            ))}
        </ul>
    ) : (
        <p>No hay servicios yet...</p>
    );
};

export default ServicesList;