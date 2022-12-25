import { useRef, useState } from 'react'

import {useUserData} from './use-user-data'

export const useAddSection = () => {
    const { todos, setTodos } = useUserData()

    const [creating, setCreating] = useState(false)

    const titleRef = useRef()

    const addSection = () => {
        if(titleRef.current.value === '') {
            setCreating(false)
            return
        } 
        const newTodos = [...todos]
        const newSection = {name: titleRef.current.value, content: []}
        newTodos.push(newSection)
        setCreating(false)
        setTodos(newTodos)
    }

    return { titleRef, creating, setCreating, addSection }
}
