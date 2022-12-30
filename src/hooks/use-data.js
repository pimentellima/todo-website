import { useCurrentUser } from "./use-current-user";

export const useData = () => {
    const { currentUser, setCurrentUser } = useCurrentUser();

    const userTodos = currentUser ? currentUser.todos : [];

    const setUserTodos = (userTodos) => {
        const newStorage = JSON.parse(localStorage.getItem("users"));
        newStorage.pop(item => item.name == currentUser.name);
        const newUser = {...currentUser, todos: userTodos};
        newStorage.push(newUser);
        localStorage.setItem("users", JSON.stringify(newStorage));
        setCurrentUser(newUser);
    };
    
    return { userTodos, setUserTodos };
};