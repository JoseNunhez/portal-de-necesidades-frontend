const createsolutionservice = async ({ id, data, token}) => {
    const response = await fetch((process.env.REACT_APP_API_URL_BD) + `/service/${id}/uploadFile`, {
        method: 'POST',
        body: data,
        headers: {
            'Authorization': token,
        },
    });

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }
    return json.message;
}

export default createsolutionservice;
