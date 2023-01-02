import React, { useState, useRef } from 'react';
import { useUserTodos } from '../../hooks/use-user-todos';
import TodosSection from '../todos-section/todos-section';
import { useAddSection } from '../../hooks/use-add-section';
import * as S from './styles';

const TodosBoard = () => {
    const { userTodos } = useUserTodos();
    const [creating, setCreating] = useState(false);
    const titleRef = useRef();
    const addSection = useAddSection();
    
    const handleAddSection = () => {
        if(titleRef.current.value === '') return
        addSection(titleRef.current.value);
        setCreating(false);
        titleRef.current.value = '';
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