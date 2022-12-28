import { useState } from "react";

import { v4 as uuidv4 } from 'uuid';

import { useUserData } from "./use-user-data";
import TodoFormInitialConfig from '../utils/todo-form-initial-config'

export const useTodoForm = (sectionIndex, onSubmit) => {
    const { todos, setTodos } = useUserData();

    const [fields, setFields] = useState(TodoFormInitialConfig);

    const renderFields = () => {
        return Object.keys(fields).map(key => {
            const { renderInput, value, label, hidden, error } = fields[key];
            return renderInput(
                value, 
                label, 
                hidden, 
                error, 
                handleChange, 
                handleHide
            );
        });
    };

    const renderButtons = () => {
        return Object.keys(fields).map(key => {
            const { renderButton, label, buttonLabel, hidden } = fields[key];
            return renderButton(
                label, 
                buttonLabel, 
                hidden, 
                handleHide
            );
        });
    ;}

    const handleChange = (value, name) => {
        if(name === 'title') {
            setFields(fields => ({...fields,
            [name]: {...fields[name], value: value, error: ''}})
            );
            return;
        }
        
        setFields(fields => ({...fields, 
            [name]: {...fields[name], value: value}
            })
        );
    }

    const handleHide = (name, value) => {
        setFields(fields => ({...fields, 
            [name]: {...fields[name], value:'', hidden: value}
            })
        );
    }
        
    const handleSubmit = (e) => {
        e.preventDefault();
        if(fields.title.value === '') {
            setFields(fields => ({...fields,
                ['title']: {...fields['title'], error: 'Não pode ser vazio'}
                })
            );
            return;
        } 

        const todo = {
            title: fields.title.value,
            description: fields.description.value,
            priority: fields.priority.value,
            deadline: fields.deadline.value,
            id: uuidv4()
        };
        const newTodos = [...todos];
        const section = newTodos[sectionIndex];
        section.content.push(todo);
        newTodos.splice(sectionIndex, 1, section);
        setTodos(newTodos);
        setFields(TodoFormInitialConfig)
        onSubmit();
    }

    return { renderFields, renderButtons, handleSubmit }
};