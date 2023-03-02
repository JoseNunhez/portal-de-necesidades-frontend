const servicioDoneService = async ({ id, token }) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL_BD}/service/${id}/done`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
    });

    if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error);
    }
}

export default servicioDoneService;