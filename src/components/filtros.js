
export const Filtros = ({setSort, sort}) => {

    return (
        <section className="filtros-servicios">
                <section className="filtros-generales">
                    <h5>Filtros</h5>
                    <form className="filtros-form">                
                        <p>Ordenar por fecha de publicación <input type="checkbox" onChange={()=>setSort(!sort)} name="sort-publicacion" checked={sort} /></p>
                        <p>Ordenar por precio <input type="checkbox" name="sort-precio" id="sort-precio" /></p>   
                        <p>Ordenar por fecha de entrega <input type="checkbox"  name="sort-entrega" id="sort-entrega"/></p>
                    </form>
                </section>
                <section className="filtros-categorias">
                    <h5>Categorías</h5>
                    <form className="filtros-form">
                        <p>Categoría 1 <input type="checkbox" name="categoria-1" id="categoria-1" /></p>
                        <p>Categoría 2 <input type="checkbox" name="categoria-2" id="categoria-2" /></p>
                        <p>Categoría 3 <input type="checkbox" name="categoria-3" id="categoria-3" /></p>
                    </form>
                </section>
                </section>
    )
}