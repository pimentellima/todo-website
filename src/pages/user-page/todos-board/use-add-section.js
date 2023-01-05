import { useState } from 'react';
import { useUserTodos } from "../use-user-todos";

export const useAddSection = () => {
    const { userTodos, setUserTodos } = useUserTodos();
    const [adding, setAdding] = useState(false);
    const [value, setValue] = useState('');

    const addSection = () => {
        if(value === '') {
            setAdding(false);
            return;
        };
        const newTodos = [...userTodos];
        const newSection = {title: value, content: []};
        newTodos.push(newSection);
        console.log(newTodos)
        setUserTodos(newTodos);
        setAdding(false);
        setValue('');
    };

    const handleChange = (e) => {
        if(e.key === 'Enter') {
            addSection();
            return;
        };
        
        setValue(e.target.value);
    }

    return { value, handleChange, adding, setAdding, addSection };
};