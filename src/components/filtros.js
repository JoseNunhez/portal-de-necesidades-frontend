
export const Filtros = ({ setSort}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        //printar los valores de los filtros
        if (event.target[0].checked) {
            setSort("publicacion");
        } else if (event.target[1].checked) {
            setSort("precio");
        } else if (event.target[2].checked) {
            setSort("entrega")
        } else {
            setSort("");
        }

    }

    return (
        <section className="filtros-servicios">
                <section className="filtros-generales">
                    <h5>Filtros</h5>
                    <form className="filtros-form" onSubmit={handleSubmit}>                
                        <p>Ordenar por fecha de publicación <input type="radio" name="sort-general"  id="sort-publicacion" /></p>
                        <p>Ordenar por precio <input type="radio"name="sort-general" id="sort-precio" /></p>   
                        <p>Ordenar por fecha de entrega <input type="radio" name="sort-general" id="sort-entrega" /></p>
                        <button>Filtrar</button>
                    </form>
                </section>
                </section>
    )
}