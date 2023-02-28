import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { createServiceService } from "../services";

const CreateService = () => {
    const [error, setError] = useState('');
    const [creating, setCreating] = useState(false);
    const { token } = useContext(AuthContext);
    const [serviceCreated, setServiceCreated] = useState(false);
    const [listSubCategory, setListSubCategory ] = useState([]);

    const handleForm = async (e) => {
        e.preventDefault();
        setError('');

        try {
            setCreating(true);
            const data = new FormData(e.target);
            await createServiceService({ token, data });
            setServiceCreated(true);

        } catch (error) {
            setError(error.message);
        } finally {
            setCreating(false);
        }
    }
    const updateSubategoria = (idCategorias) => {
        if (idCategorias === "1") {
            setListSubCategory(
                [{id: 1, name:"Marketing de redes sociales"}]
            );
        }else if(idCategorias === "2") {
            setListSubCategory(
                [{id: 2, name:"Contenido web"}]
            );
        } else if(idCategorias ===  "3") {
            setListSubCategory(
                [{id: 3, name:"Aplicaciones web"}]
            );
        } else if(idCategorias ===  "4") {
            setListSubCategory(
                [{id: 4, name:"Ventas"}]
            );
        } else if(idCategorias ===  "5") {
            setListSubCategory(
            [{id: 5, name:"Consultas legales"}]
            );
        }
    }

    return !serviceCreated ? (
        <>
            <form className="formulario" onSubmit={handleForm}>
                <h3>Crea tu servicio</h3>
                    <input className="form-input" type="text" id="title" name="title" placeholder="Título" required />
                    <input className="form-input" type="text" id="description" name="description" placeholder="Desripción" required />
                    <input className="form-input" type="number" id="price" name="price" placeholder="Precio" required />

                    <select name="categoriaId" onChange={(e) => updateSubategoria(e.target.value)} required> 
                    <option value="" hidden>
                        Selecciona una categoría
                    </option>
                    <option value="1">marketing digital</option>
                    <option value="2">Redacción y Traducción</option>
                    <option value="3">Programacion web</option>
                    <option value="4">Servicio al cliente</option>
                    <option value="5">Asesoria legal</option>
                    </select >
                    <select name="subcategoriaId" required>
                        <option value="" hidden>
                            Selecciona una subcategoría
                        </option>
                    {listSubCategory.map((subcategory) => {
                        return <option key={subcategory.id} value={subcategory.id}>{subcategory.name}</option>
                    })}
                    </select>

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