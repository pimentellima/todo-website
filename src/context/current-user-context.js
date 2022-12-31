import React, { createContext, useState, useEffect } from "react"
import { useNavigate } from "react-router";

export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const navigate = useNavigate();
    
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userLoggedIn"));
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