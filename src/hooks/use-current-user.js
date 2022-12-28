import { useContext } from "react"
import { CurrentUserContext } from "../context/current-user-context";
import { useNavigate } from "react-router";

export const useCurrentUser = () => {
    const { user, setUser } = useContext(CurrentUserContext);
    const navigate = useNavigate();

    const userTodos = user ? user.todos : [];

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

    const setUserTodos = (userTodos) => {
        const usersStorage = JSON.parse(localStorage.getItem("users"))
        const newUser = {...user, todos: userTodos}
        const newStorage = usersStorage.filter(item => item.name != user.name)
        newStorage.push(newUser)
        localStorage.setItem("users", JSON.stringify(newStorage))
        setUser(newUser)
    }

    return { 
        userTodos,
        setUserTodos,
        login,
        signup,
        logout
    }
}