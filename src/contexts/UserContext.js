import React, { useEffect } from "react"
import { createContext, useState } from "react"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState()

    const signin = (username, password) => {
        if (!username) return 'Digite o nome de usuário'
        if (!password) return 'Digite a senha'
        const usersStorage = JSON.parse(localStorage.getItem("users"))
        const user = usersStorage.find(user => user.username === username)
        if(!usersStorage || !user) return "Não existe um usuário com esse nome"
        if(password != user.password) return "Senha incorreta"

        setUser(user)
    }

    const signup = (username, password, confirmPassword) => {
        if(!username) return 'Escolha um nome de usuário'
        const usersStorage = JSON.parse(localStorage.getItem("users"))
        if(usersStorage) {
            const user = usersStorage.find(user => user.username === username)
            if(user) return "Já existe um usuário com esse nome"
        } 

        const newUser = { username: username, 
            password: password, 
            sections:  [ {name: "Tarefas", data:[]},
                        {name: "Em Andamento", data:[]},
                        {name: "Pausadas", data:[]},
                        {name: "Finalizadas", data:[]} ] }

        if(!password) return 'Escolha uma senha'
        if(!confirmPassword) return 'Confirme a senha'
        if(password != confirmPassword) return "Verifique se as senhas estão iguais"

        if(!usersStorage) {
            localStorage.setItem("users", JSON.stringify([newUser]))
        }
        else {
            localStorage.setItem("users", JSON.stringify([...usersStorage, newUser]))
        }
            
    }

    const logout = () => {
        setUser(null)
    }

    return(
        <UserContext.Provider value={{user, setUser, signin, signup, logout}}>
            {children}
        </UserContext.Provider>
    )
}