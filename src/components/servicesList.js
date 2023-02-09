import Service from "./service";

const ServicesList = ({ services }) => {
    return services.length ? (
        <ul className="services-list">
            {services.map((service) => (
                <li key={service.url}>
                    <Service service={service} />
                </li>
            ))}
        </ul>
    ) : (
        <p>No hay servicios yet...</p>
    );
};

export default ServicesList;