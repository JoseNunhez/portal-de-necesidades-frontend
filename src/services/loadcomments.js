const loadComments = async ({ id, token }) => {

    try{
    const response = await  fetch((process.env.REACT_APP_API_URL_BD) + `/service/${id}/comments`, {
        method: 'GET',
        headers: {
            'Authorization': token,
        },
    });

    const json = await response.json();
    const comments = json.message;

    return  comments.map((comment) => ({
        id: comment.ID,
        texto: comment.TEXTO,
        fecha: comment.CREATED_AT,
        id_usuario: comment.ID_USUARIOS,
        nombre_usuario: comment.NOMBRE_USUARIO,
        imagen: comment.IMAGEN,
        nombre: comment.NOMBRE,
    }));
    } catch (error) {
        throw new Error(error);
    }
};

export default loadComments;