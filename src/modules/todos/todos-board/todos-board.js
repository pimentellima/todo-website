import React, { useState, useRef } from 'react';
import { useUserTodos } from '../../../hooks/use-user-todos';
import TodosSection from '../todos-section/todos-section';
import * as S from './styles';

const TodosBoard = () => {
    const { userTodos, setUserTodos } = useUserTodos();
    const [creating, setCreating] = useState(false);
    const titleRef = useRef();
    
    const handleAddSection = () => {
        if(titleRef.current.value === '') return
        const newTodos = [...userTodos];
        const newSection = {title: titleRef.current.value, content: []};
        newTodos.push(newSection);
        setUserTodos(newTodos);
        titleRef.current.value = '';
        setCreating(false);

    };

    return (
        <S.Content>
            {userTodos.map((section, index) =>
                <TodosSection  
                    title={section.title} 
                    content={section.content} 
                    sectionIndex={index} 
                    key={index}
                    />
                )
            }
            {creating ? 
                <S.Input 
                    ref={titleRef}
                    autoFocus
                    type='text'
                    placeholder='Digite aqui ...'
                    onKeyDown={(e) => e.key === 'Enter' && handleAddSection()} 
                    />
                :
                <S.Button 
                    type='button'
                    onClick={() => setCreating(true)}
                    >
                    Nova seção
                </S.Button>
            }
        </S.Content>
    )
};

export default TodosBoard;