import React from 'react';
import { useUserTodos } from '../../hooks/use-user-todos';
import { useAddSection } from '../../hooks/use-add-section';
import TodosSection from '../todos-section/todos-section';
import * as S from './styles';

const TodosBoard = () => {
    const { userTodos } = useUserTodos();

    const { 
        value,
        handleChange, 
        adding, 
        setAdding, 
        addSection,
    } = useAddSection();
    
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
            {adding ? 
                <S.Input 
                    autoFocus
                    value={value}
                    type='text'
                    placeholder='Digite aqui ...'
                    onChange={e => handleChange(e)} 
                    onKeyDown={e => handleChange(e)}
                    onBlur={() => addSection()}
                    />
                :
                <S.Button 
                    type='button'
                    onClick={() => setAdding(true)}
                    >
                    Nova seção
                </S.Button>
            }
        </S.Content>
    )
};

export default TodosBoard;