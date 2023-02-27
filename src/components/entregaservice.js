import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import createsolutionservice from "../services/createSolutionservice";

const EntregaService = ({ service, id }) => {
    const [error, setError] = useState("");
    const [creating, setCreating] = useState(false);
    const { token } = useContext(AuthContext);
    const [solucionCreada, setSolucionCreada] = useState(false);


    const handleForm = async (e) => {
        e.preventDefault();
        setError("");
        try {
            setCreating(true);
            const data = new FormData(e.target);
            await createsolutionservice({ token, data, id });
            setSolucionCreada(true);
        } catch (error) {
            setError(error.message);
        } finally {
            setCreating(false);
        }
    }

    return !solucionCreada ? (
        <>
            <form className='formulario' onSubmit={handleForm}>
                <h3>Entrega la solución a {service.TITULO}</h3>
                <input className="form-input" type="file" id="file" name="solution" placeholder="Archivo" required />
                <input className="form-input" type="text" id="comentario" name="comentario" placeholder="Comentario explicativo (opcional)" required />
                <button>Entregar</button>
                <p><Link to="/">Volver a servicios ofertados</Link></p>
            </form>
            {creating ? <p>Entregando servicio...</p> : null}
            {error ? <p>{error}</p> : null}
        </>
    ) : (
            <section>
                <p>Servicio entregado correctamente</p>
                <Link to="/">Volver a homepage </Link>
            </section>
    )
}

export default EntregaService