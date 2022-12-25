import { useUserData } from './use-user-data'

export const useRemoveContent = () => {
    const { todos, setTodos } = useUserData()

    const removeContent = (sectionIndex) => {
        const newTodos = [...todos];
        const newSection = newTodos[sectionIndex];
        newSection.content.splice(0);
        newTodos.splice(sectionIndex, 1, newSection);
        setTodos(newTodos);
    }

    return { removeContent }
}
