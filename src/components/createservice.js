import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { createServiceService } from "../services";

const CreateService = () => {
    const [error, setError] = useState('');
    const [creating, setCreating] = useState(false);
    const { token } = useContext(AuthContext);
    const [serviceCreated, setServiceCreated] = useState(false);

    const handleForm = async (e) => {
        e.preventDefault();
        setError('');

        try {
            setCreating(true);
            const data = new FormData(e.target);
            console.log(data)
            await createServiceService({ token, data });
            setServiceCreated(true);

        } catch (error) {
            setError(error.message);
        } finally {
            setCreating(false);
        }
    }

    return !serviceCreated ? (
        <>
            <form className="formulario" onSubmit={handleForm}>
                <h3>Crea tu servicio</h3>
                    <input className="form-input" type="text" id="title" name="title" placeholder="Título" required />
                    <input className="form-input" type="text" id="description" name="description" placeholder="Desripción" required />
                    <input className="form-input" type="number" id="price" name="price" placeholder="Precio" required />
                    <input className="form-input" type="text" id="categoriaId" name="categoriaId" placeholder="Categoría" required />
                    <input className="form-input" type="text" id="subcategoriaId" name="subcategoriaId" placeholder="Subcategoría" required />
                    <input className="form-input" type="text" id="date" name="date" placeholder="Fecha límite de entrega(DD/MM/AAAA)" required />
                    <input className="form-input" type="file" id="file" name="file" placeholder="Archivo" required />
                <button>Crear servicio</button>
                <p><Link to="/">Ver todos los servicios</Link></p>

            </form>
                {creating ? <p>Creando servicio...</p> : null}
                {error ? <p>{error}</p> : null}
        </>
    ) : (
            <section>
                <p>Servicio creado correctamente</p>
                <Link to="/">Volver a homepage </Link>
            </section>
        )
}

export default CreateService