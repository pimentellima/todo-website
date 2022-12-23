import React from 'react';

import { useUserData } from '../../hooks/use-user-data';

import TodosSection from '../todos-section/todos-section';

import * as S from './styles';

const SectionsBoard = () => {
    const { todos } = useUserData();

    return (
        <S.Content>
            {todos.map((section, index) =>
                <TodosSection  
                    title={section.name} 
                    content={section.content} 
                    sectionIndex={index} 
                    key={index}
                    />
                )
            }
        </S.Content>
    );
};

export default SectionsBoard;