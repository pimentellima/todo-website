import React, { createContext, useState, useEffect } from "react"
import { useNavigate } from "react-router";
import getUserToken from '../utils/get-user-token';

export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const navigate = useNavigate();
    
    useEffect(() => {
        const user = getUserToken();
        if(user) {
            setCurrentUser(user);
            navigate('/user')
        };
    }, []);

    return(
        <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUserContext.Provider>
    );
};