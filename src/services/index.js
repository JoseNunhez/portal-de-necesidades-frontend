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


export const registerUserService = async ({ email, password, nameUser }) => {
    console.log(email, password, nameUser)
    console.log(process.env.REACT_APP_API_URL_BD + '/user')
    const response = await fetch((process.env.REACT_APP_API_URL_BD)+ '/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
            nameUser,
        }),
    });

    const json = await response.json();

    if(!response.ok) {
        throw new Error(json.message);
    }

    return json;
}

export const loginUserService = async ({email, password}) => {
    const response = await fetch((process.env.REACT_APP_API_URL_BD) + '/login', {
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

    return json.message;
}

export const getMyUserDataService = async (token) => {
    const response = await fetch((process.env.REACT_APP_API_URL_BD) + '/user', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
        },
    });

    const json = await response.json();

    if(!response.ok) {
        throw new Error(json.message);
    }

    return json.message;
}

export const createServiceService = async ({ data, token }) => {
    const response = await fetch((process.env.REACT_APP_API_URL_BD) + '/service', {
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
    