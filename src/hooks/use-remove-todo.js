import { useUserData } from "./use-user-data"

export const useRemoveTodo = () => {
    const { todos, setTodos } = useUserData();

    const removeTodo = (index, sectionIndex) => {
        const newTodos = [...todos];
        const newSection = newTodos[sectionIndex];
        newSection.content.splice(index, 1);
        newTodos.splice(sectionIndex, 1, newSection);
        setTodos(newTodos);
    }

    return { removeTodo }
}