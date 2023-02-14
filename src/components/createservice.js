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
        <form onSubmit={handleForm}>
            <fieldset>
                <label htmlFor="title">Título: </label>
                <input type="text" id="title" name="title" required />
            </fieldset>
            <fieldset>
                <label htmlFor="description">Descripción: </label>
                <input type="text" id="description" name="description" required />
            </fieldset>
            <fieldset>
                <label htmlFor="price">Precio: </label>
                <input type="number" id="price" name="price" required />
            </fieldset>
            <fieldset>
                <label htmlFor="categoriaId">Categoría: </label>
                <input type="text" id="categoriaId" name="categoriaId" required />
            </fieldset>
            <fieldset>
                <label htmlFor="subcategoriaId">Subcategoría: </label>
                <input type="text" id="subcategoriaId" name="subcategoriaId" required />
            </fieldset>
            <fieldset>
                <label htmlFor="date">Fecha máxima de entrega(DD/MM/AAAA): </label>
                <input type="text" id="date" name="date" required />
            </fieldset>
            <fieldset>
                <label htmlFor="file">Archivo: </label>
                <input type="file" id="file" name="file"  />
            </fieldset>
            <button>Crear servicio</button>
            {creating ? <p>Creando servicio...</p> : null}
            {error ? <p>{error}</p> : null}
        </form>
    ) : (
            <section>
                <p>Servicio creado correctamente</p>
                <Link to="/">Volver a homepage </Link>
            </section>
        )
}

export default CreateService