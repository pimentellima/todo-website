import {useUserData} from './use-user-data'

export const useRemoveSection = () => {
    const { todos, setTodos } = useUserData()

    const removeSection = (sectionIndex) => {
        const newTodos = [...todos]
        newTodos.splice(sectionIndex, 1)
        setTodos(newTodos)
    }

    return { removeSection }
}
