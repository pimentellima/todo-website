import { useUserTodos } from "../use-user-todos";

export const useRemoveTodo = () => {
    const { userTodos, setUserTodos } = useUserTodos();

    const removeTodo = (index, sectionIndex) => {
        const newTodos = [...userTodos];
        const newSection = newTodos[sectionIndex];
        newSection.content.splice(index, 1);
        newTodos.splice(sectionIndex, 1, newSection);
        setUserTodos(newTodos);
    };

    return removeTodo;
};
