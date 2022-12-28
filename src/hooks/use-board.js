import { useRef, useState } from 'react'

import { useCurrentUser } from "./use-current-user";

export const useBoard = () => {
    const { userTodos, setUserTodos } = useCurrentUser();

    const [creating, setCreating] = useState(false)

    const titleRef = useRef()

    const addSection = () => {
        if(titleRef.current.value === '') {
            setCreating(false)
            return
        } 
        const newTodos = [...userTodos];
        const newSection = {name: titleRef.current.value, content: []};
        newTodos.push(newSection);
        setCreating(false);
        setUserTodos(newTodos);
    }

    return { titleRef, creating, setCreating, addSection }
}
