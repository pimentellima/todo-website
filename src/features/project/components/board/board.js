import React from 'react';

import { useData } from '../../../../hooks/useData';

import TodoSection from '../todo-section/todoSection';

import * as S from './boardStyles';

const Board = () => {

    const { todos } = useData()

    return (
        <S.Content>
            {todos.map((section, index) =>
                <TodoSection  
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

export default Board;