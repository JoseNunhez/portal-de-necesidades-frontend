export const loadAllServicesService = async () => {
    const response = await fetch((process.env.REACT_APP_API_URL));


    const json = await response.json();

    if(!response.ok) {
        throw new Error(json.message);
    }

    return json.results;
};