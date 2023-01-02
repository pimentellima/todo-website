import { useUserTodos } from "../../hooks/use-user-todos";

export const useAddSection = () => {
    const { userTodos, setUserTodos } = useUserTodos();

    const addSection = (title) => {
        const newTodos = [...userTodos];
        const newSection = {title, content: []};
        newTodos.push(newSection);
        setUserTodos(newTodos);
    };

    return addSection;
};