import React, { createContext, useState, useEffect } from "react"
import { useNavigate } from "react-router";

export const CurrentUserContext = createContext()

export const CurrentUserProvider = ({ children }) => {
    const [user, setUser] = useState();

    const navigate = useNavigate()

    useEffect(() => {
        const userLoggedIn = JSON.parse(localStorage.getItem("userLoggedIn"))
        const usersStorage = JSON.parse(localStorage.getItem("users"));
        if(userLoggedIn && usersStorage) {
            const user = usersStorage.find(item => item.name === userLoggedIn)
            if(user) {
                setUser(user);
                navigate('/user')
            } 
        } 
    }, [])


    return(
        <CurrentUserContext.Provider value={{ user, setUser }}>
            {children}
        </CurrentUserContext.Provider>
    )
}