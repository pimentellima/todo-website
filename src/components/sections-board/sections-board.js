import React, { useState } from 'react';

import {useAddSection} from '../../hooks/use-add-section'

import { useUserData } from '../../hooks/use-user-data';

import TodosSection from '../todos-section/todos-section';

import * as S from './styles';

const SectionsBoard = () => {
    const { todos } = useUserData();

    const { titleRef, addSection } = useAddSection();

    const [creating, setCreating] = useState(false)

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
                <S.CreateSectionButton onClick={() => setCreating(true)}>Nova seção</S.CreateSectionButton>
            }
        </S.Content>
    )
};

export default SectionsBoard;