import React from 'react';

import { useData } from '../../../../hooks/useData';

import Section from '../section/section';

import * as S from './styles';

const Board = () => {

    const { todos } = useData()

    return (
        <S.Content>
            {todos.map((section, index) =>
                <Section  
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