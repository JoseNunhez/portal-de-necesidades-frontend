export const loadAllServicesService = async () => {
    const response = await fetch(process.env.REACT_APP_API_URL_BD +'/service');
    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }
    return json.data;
};

export const loadServiceByIdService = async (id) => {

    const response = await fetch((process.env.REACT_APP_API_URL_BD) + "/service/" + id);
    console.log(response);

    const json = await response.json();
    if (!response.ok) {
        throw new Error(json.message);
    }
    console.log(json.data);
    return json.data;
}


export const registerUserService = async (email, password) => {
    const response = await fetch((process.env.REACT_APP_API_URL)/'user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });

    const json = await response.json();

    if(!response.ok) {
        throw new Error(json.message);
    }

    return json;
}

export const loginUserService = async (email, password) => {
    const response = await fetch((process.env.REACT_APP_API_URL)/'auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });

    const json = await response.json();

    if(!response.ok) {
        throw new Error(json.message);
    }

    return json;
}