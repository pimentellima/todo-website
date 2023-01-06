import React, { createContext, useState, useEffect } from "react"
import { useNavigate } from "react-router";

export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const navigate = useNavigate();
    
    useEffect(() => {
        const userToken = JSON.parse(
            localStorage.getItem("userToken")
            );
        const storage = JSON.parse(
            localStorage.getItem("users")
            );
        const user = storage && storage.find(
            user => user.name === userToken
            );
        if (userToken && storage && user) {
            setCurrentUser(user);
            navigate('/user')
        }
    }, []);

    return(
        <CurrentUserContext.Provider 
            value={{ 
                currentUser, 
                setCurrentUser 
                }}
            >
            {children}
        </CurrentUserContext.Provider>
    );
};