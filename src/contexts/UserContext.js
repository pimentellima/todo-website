import React, { useEffect, createContext, useState } from "react"
import { useNavigate } from "react-router-dom";

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        const userLoggedIn = JSON.parse(localStorage.getItem("userLoggedIn"))
        const usersStorage = JSON.parse(localStorage.getItem("users"));
        if(userLoggedIn && usersStorage) {
            const user = usersStorage.find(user => user.username === userLoggedIn)
            if(user) setUser(user)
        } 
    }, [])


    const signin = (username, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("users"));
        const user = usersStorage.find(user => user.username === username);
        if(!usersStorage || !user) return 'Usuário não encontrado';
        if(password != user.password) return 'Login inválido';
        localStorage.setItem("userLoggedIn", JSON.stringify(username))
        setUser(user);
    }

    const signup = (username, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("users"))

        const newUser = { username: username, password: password, 
            sections:  [ {name: "Tarefas", data:[]},
            {name: "Em Andamento", data:[]},
            {name: "Pausadas", data:[]},
            {name: "Finalizadas", data:[]} ] }

        if(!usersStorage) {
            localStorage.setItem("users", JSON.stringify([newUser]))
            return;
        }

        const user = usersStorage.find(user => user.username === username)
        if(user) return "Já existe um usuário com esse nome"

        localStorage.setItem("users", JSON.stringify([...usersStorage, newUser]))
    }

    const logout = () => {
        navigate('/login')
        localStorage.removeItem('userLoggedIn')
        setUser(null)
    }

    return(
        <UserContext.Provider value={{user, setUser, signin, signup, logout}}>
            {children}
        </UserContext.Provider>
    )
}