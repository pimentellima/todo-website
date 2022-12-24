import React, { useState } from 'react';

import { useDragTodo } from '../../hooks/use-drag-todo';

import TodoCard from '../todo-card/todo-card/todo-card'
import TodoFormModal from '../todo-form-modal/todo-form-modal/todo-form-modal';

import * as S from './styles';

const TodosSection = ({ title, content, sectionIndex }) => {    
    const [modalOpen, setModalOpen] = useState(false)
    
    const { onDragEnterSection, dragging } = useDragTodo()

    return (
        <S.Container 
            draggable={dragging.toString()}
            onDragEnter={e => onDragEnterSection(e, sectionIndex)}
            onDragOver={e => e.preventDefault()}
            onDrop={(e) => e.preventDefault()}>
            <S.Header>
                {title}
                <S.FormButton onClick={() => setModalOpen(true)}>+</S.FormButton>
                <TodoFormModal modalOpen={modalOpen} setModalOpen={setModalOpen} sectionIndex={sectionIndex}/>
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

export default TodosSection;