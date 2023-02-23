import "../styles/filtrosform.css";

export const Filtros = ({ setSort}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        //printar los valores de los filtros
        setSort(event.target.sortgeneral.value)
    }

    return (
        <section className="filtros-servicios">
                <section className="filtros-generales">
                    <h5>Filtros</h5>
                    <form className="filtros-form" onSubmit={handleSubmit}>                
                        <p>Ordenar por fecha de publicación <input type="radio" value="publicacion" name="sortgeneral"  id="sortpublicacion" className="checkmarck" /></p>
                        <p>Ordenar por precio <input type="radio"name="sortgeneral" value="precio" id="sortprecio" className="checkmarck" /></p>   
                        <p>Ordenar por fecha de entrega <input type="radio" value="entrega" name="sortgeneral" id="sortentrega" className="checkmarck" /></p>
                        <button>Filtrar</button>
                    </form>
                </section>
                </section>
    )
}