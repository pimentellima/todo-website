import { useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { DataContext } from '../context/DataContext'

export const useAuth = () => {
    const { setUser } = useContext(DataContext)
    const navigate = useNavigate()

    useEffect(() => {
        const userLoggedIn = JSON.parse(localStorage.getItem("userLoggedIn"))
        const usersStorage = JSON.parse(localStorage.getItem("users"));
        if(userLoggedIn && usersStorage) {
            const user = usersStorage.find(item => item.name === userLoggedIn)
            if(user) setUser(user)
        } 
    }, [])

    const login = (name, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("users"));
        const user = usersStorage.find(item => item.name === name);
        if(!usersStorage || !user) return 'Usuário não encontrado';
        if(password != user.password) return 'Login inválido';
        localStorage.setItem("userLoggedIn", JSON.stringify(name))
        setUser(user);
    }

    const signup = (name, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("users"))

        const newUser = { name: name, password: password, 
            todos:  [ {name: "Tarefas", content:[]},
            {name: "Em Andamento", content:[]},
            {name: "Pausadas", content:[]},
            {name: "Finalizadas", content:[]} ] }

        if(!usersStorage) {
            localStorage.setItem("users", JSON.stringify([newUser]))
            return;
        }

        const user = usersStorage.find(item => item.name === name)
        if(user) return "Já existe um usuário com esse nome"

        localStorage.setItem("users", JSON.stringify([...usersStorage, newUser]))
    }

    const logout = () => {
            navigate('/login')
        localStorage.removeItem('userLoggedIn')
        setUser(null)
    }

    return { login, signup, logout }
}