import { useState, useRef } from "react";

import { v4 as uuidv4 } from 'uuid';

import { useUserData } from "./use-user-data";

export const useCreateTodo = () => {
    const [priority, setPriority] = useState(false);
    const [description, setDescription] = useState(false);
    const [deadline, setDeadline] = useState(false);
    const [error, setError] = useState('');
    const [date, setDate] = useState(new Date());
    
    const titleRef = useRef();
    const descriptionRef = useRef();
    const priorityRef = useRef();

    const { todos, setTodos } = useData();

    const addTodo = (sectionIndex) => {
        if(titleRef.current.value === '') {
            setError('Não pode ser vazio');
            return;
        } 

        const todo = new Object();
        todo.title = titleRef.current.value;
        todo.description = description ? descriptionRef.current.value : '';
        todo.priority = priority ? priorityRef.current.value : '';
        todo.deadline = deadline ? date.toLocaleDateString() : '';
        todo.id = uuidv4();

        const newTodos = [...todos];
        const section = newTodos[sectionIndex];
        section.content.push(todo);
        newTodos.splice(sectionIndex, 1, section);
        setTodos(newTodos);
        return true
    }


    return {
        priority,
        description,
        deadline,
        error,
        date,
        titleRef,
        descriptionRef,
        priorityRef,
        setPriority,
        setDescription,
        setDeadline,
        setError,
        setDate,
        addTodo
    }
}
