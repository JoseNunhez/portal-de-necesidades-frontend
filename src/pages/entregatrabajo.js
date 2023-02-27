import { useParams } from "react-router-dom"
import EntregaService from "../components/entregaservice";
import useSingleService from "../hooks/useSingleService";

const EntregaTrabajo = () => {
    const { id } = useParams();

    const { service } = useSingleService(id);

    return service ? (
        <EntregaService service={service} id={id} />
    ) : <p>Cargando...</p>
}

export default EntregaTrabajo