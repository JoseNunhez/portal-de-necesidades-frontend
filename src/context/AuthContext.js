import { createContext, useEffect, useState } from "react";
import { getMyUserDataService } from "../services";

import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProviderComponent = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('token', token);
    }, [token]);

    useEffect(() => {
        const getUserData = async () => {
            try {
                const userData = await getMyUserDataService(token);
                setUser(userData);
            } catch (error) {
                setToken('');
                setUser(null);
                navigate("/login")
            }
            
        }
        if(token) getUserData();
    }, [token, navigate]);

    const login = (token) => {
        setToken(token);
    }

    const logout = () => {
        setToken('');
        setUser(null);
        navigate("/login")
    }

    return <AuthContext.Provider value={{token, user, setToken, setUser, login, logout}}>{children}</AuthContext.Provider>;
}
