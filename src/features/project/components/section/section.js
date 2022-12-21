import React, { useState } from 'react';

import { useDrag } from '../../hooks/useDrag';

import TodoCard from '../todo-card/todoCard';
import TodoForm from '../todo-form/todoForm'
import Modal from '../modal/modal';

import * as S from './styles';

const Section = ({ title, content, sectionIndex }) => {    
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
                <Modal open={openForm} handleCloseModal={() => setOpenForm(false)}>
                    <TodoForm handleCloseModal={() => setOpenForm(false)} sectionIndex={sectionIndex}/>
                </Modal>
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

export default Section;