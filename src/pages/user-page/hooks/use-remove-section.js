import { useUserTodos } from "./use-user-todos";

export const useRemoveSection = () => {
    const { userTodos, setUserTodos } = useUserTodos();

    const removeSection = (sectionIndex) => {
        const newTodos = [...userTodos];
        newTodos.splice(sectionIndex, 1);
        setUserTodos(newTodos);
    };

    return removeSection;
};
