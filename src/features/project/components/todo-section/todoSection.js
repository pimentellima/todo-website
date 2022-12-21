import React, { useState } from 'react';

import { useDrag } from '../../hooks/useDrag';

import TodoCard from '../todo-card/todoCard'
import ControlledModal from '../controlled-modal/controlledModal';
import TodoForm from '../todo-form/todoForm'

import * as S from './todoSectionStyles';

const TodoSection = ({ title, content, sectionIndex }) => {    
    const { drop, dragging } = useDrag()
    
    const [openForm, setOpenForm] = useState(false)

    return (
        <S.Container 
            draggable={dragging.toString()}
            onDragOver={e => e.preventDefault()}
            onDrop={() => drop(sectionIndex)}>
            <S.Header>
                {title}
                <S.FormButton onClick={() => setOpenForm(true)}>+</S.FormButton>
                <ControlledModal open={openForm} handleCloseModal={() => setOpenForm(false)}>
                    <TodoForm handleCloseModal={() => setOpenForm(false)} sectionIndex={sectionIndex}/>
                </ControlledModal>
            </S.Header>
            {content.map((todo, index) =>
                <TodoCard
                    todo={todo} 
                    key={todo.id}
                    index={index}
                    sectionIndex={sectionIndex}
                    />
            )}
        </S.Container>
    )
}

export default TodoSection;