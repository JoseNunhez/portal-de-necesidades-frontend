const Solucion = ({ solucion }) => {
    return (
        <article>
            <p>{solucion.FILE_NAME}</p>
            <p>ID: {solucion.ID}</p>
            <p>Fecha de publicación: {new Date(solucion.CREATED_AT).toLocaleString()}</p>
        </article>
    );
}

export default Solucion;