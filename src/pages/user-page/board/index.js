import React from 'react';
import { useUserTodos } from '../../../hooks/use-user-todos';
import Section from '../section';
import * as S from './styles';
import { useAddSection } from './use-add-section';

const Board = () => {
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
                <Section  
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

export default Board;