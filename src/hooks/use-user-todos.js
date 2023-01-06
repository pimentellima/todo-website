import { useCurrentUser } from "../pages/user-page/use-current-user";

export const useUserTodos = () => {
    const { currentUser, setCurrentUser } = useCurrentUser();

    const userTodos = currentUser ? currentUser.todos : [];

    const setUserTodos = (userTodos) => {
        const storage = JSON.parse(
            localStorage.getItem("users")
            );
        const newStorage = storage.filter(
            item => item.name != currentUser.name
            );
        const newUser = {...currentUser, todos: userTodos};
        newStorage.push(newUser);
        localStorage.setItem("users", JSON.stringify(newStorage));
        setCurrentUser(newUser);
    };
    
    return { userTodos, setUserTodos };
};