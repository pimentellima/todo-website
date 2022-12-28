import { useCurrentUser } from "./use-current-user";

export const useSection = () => {
    const { userTodos, setUserTodos } = useCurrentUser()

    const removeSection = (sectionIndex) => {
        const newTodos = [...userTodos]
        newTodos.splice(sectionIndex, 1)
        console.log(newTodos)
        setUserTodos(newTodos)
    }

    const removeContent = (sectionIndex) => {
        const newTodos = [...userTodos];
        const newSection = newTodos[sectionIndex];
        newSection.content.splice(0);
        newTodos.splice(sectionIndex, 1, newSection);
        setUserTodos(newTodos);
    }

    return { removeContent, removeSection }
}
