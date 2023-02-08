import Service from "../components/service";

const ServicePage = ({service}) => {
    return (
        <div>
        <h1>Unic Service Page</h1>
        <Service service={service} />
        </div>
    );
}
    
export default ServicePage;