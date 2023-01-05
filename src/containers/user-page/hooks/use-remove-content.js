import { useUserTodos } from "../../../hooks/use-user-todos";

export const useRemoveContent = () => {
    const { userTodos, setUserTodos } = useUserTodos();

    const removeContent = (sectionIndex) => {
        const newTodos = [...userTodos];
        const newSection = newTodos[sectionIndex];
        newSection.content.splice(0);
        newTodos.splice(sectionIndex, 1, newSection);
        setUserTodos(newTodos);
    };

    return removeContent;
};
