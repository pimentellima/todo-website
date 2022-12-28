import React from 'react';

import { useBoard } from '../../hooks/use-board';

import { useCurrentUser } from '../../hooks/use-current-user';

import TodosSection from '../todos-section/todos-section';

import * as S from './styles';

const SectionsBoard = () => {
    const { userTodos } = useCurrentUser();
    
    const { 
        titleRef, 
        addSection, 
        creating, 
        setCreating } = useBoard();

    return (
        <S.Content>
            {userTodos.map((section, index) =>
                <TodosSection  
                    title={section.name} 
                    content={section.content} 
                    sectionIndex={index} 
                    key={index}
                    />
                )
            }
            {creating ? 
                <S.TextInput 
                    ref={titleRef}
                    autoFocus
                    type='text'
                    placeholder='Digite aqui ...'
                    onKeyDown={(e) => e.key === 'Enter' && addSection()} 
                    onBlur={addSection}
                    />
                :
                <S.CreateSectionButton 
                    onClick={() => setCreating(true)}
                    >
                    Nova seção
                </S.CreateSectionButton>
            }
        </S.Content>
    )
};

export default SectionsBoard;