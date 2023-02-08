export const loadAllServicesService = async () => {
    const response = await fetch((process.env.REACT_APP_API_URL));


    const json = await response.json();

    if(!response.ok) {
        throw new Error(json.message);
    }

    return json.results;
};

export const loadServiceByIdService = async (id) => {
    const response = await fetch((process.env.REACT_APP_API_URL) / id);
    
    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }
    
    return json;
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