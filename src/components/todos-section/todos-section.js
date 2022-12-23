import React, { useState } from 'react';

import { useDragTodo } from '../../hooks/use-drag-todo';

import TodoCard from '../todo-card/todo-card/todo-card'
import TodoFormModal from '../todo-form-modal/todo-form-modal'
import CreateTodoForm from '../create-todo-form/create-todo-form/create-todo-form'

import * as S from './styles';

const TodosSection = ({ title, content, sectionIndex }) => {    
    const [openForm, setOpenForm] = useState(false)
    
    const { drop, dragging } = useDragTodo()

    return (
        <S.Container 
            draggable={dragging.toString()}
            onDragOver={e => e.preventDefault()}
            onDrop={() => drop(sectionIndex)}>
            <S.Header>
                {title}
                <S.FormButton onClick={() => setOpenForm(true)}>+</S.FormButton>
                <TodoFormModal open={openForm} closeModal={() => setOpenForm(false)}>
                    <CreateTodoForm closeModal={() => setOpenForm(false)} sectionIndex={sectionIndex}/>
                </TodoFormModal>
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