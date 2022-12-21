import { useContext } from "react"
import { DataContext } from "../contexts/DataContext";

export const useData = () => {
    const { user, setUser } = useContext(DataContext)

    const todos = user ? user.todos : null

    const setTodos = (todos) => {
        const usersStorage = JSON.parse(localStorage.getItem("users"))
        const newUser = {...user, todos: todos}
        const newStorage = usersStorage.filter(item => item.name != user.name)
        newStorage.push(newUser)
        localStorage.setItem("users", JSON.stringify(newStorage))
        setUser(newUser)
    }

    return { user, todos, setUser, setTodos }
}