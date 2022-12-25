import { useState } from "react";

import { v4 as uuidv4 } from 'uuid';

import { useUserData } from "./use-user-data";

export const useTodoForm = (sectionIndex, onSubmit) => {
    const { todos, setTodos } = useUserData();

    const defaultFields = {
        title: {
            value: '',
            hidden: false,
            error: '',
        },
        description: {
            value: '',
            hidden: true
        },
        deadline: {
            value: '',
            hidden: true
        },
        priority: {
            value: '',
            hidden: true
        }
    }

    const [fields, setFields] = useState(defaultFields);

    const handleChangeField = (value, name) => {
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

    const handleHideField = (name, value) => {
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
        setFields(defaultFields)
        onSubmit();
    }

    return { fields, handleChangeField, handleHideField, handleSubmit }
};