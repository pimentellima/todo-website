import React, { useState } from 'react';

import { useDragTodo } from '../../hooks/use-drag-todo';

import TodoCard from '../todo-card/todo-card/todo-card'
import TodoFormModal from '../todo-form-modal/todo-form-modal/todo-form-modal';

import * as S from './styles';

const TodosSection = ({ title, content, sectionIndex }) => {    
    const [modalOpen, setModalOpen] = useState(false)
    
    const { onDragEnterSection, dragging } = useDragTodo()

    return (
        <S.Container>
            <S.Header>
                {title}  {'(' + content.length + ')'} 
                {title === 'Tarefas' &&
                    <S.CreateTodoButton onClick={() => setModalOpen(true)}>+</S.CreateTodoButton>
                }
            </S.Header>
            <S.Content 
                draggable={dragging.toString()}
                onDragEnter={e => onDragEnterSection(e, sectionIndex)}
                onDragOver={e => e.preventDefault()}
                onDrop={(e) => e.preventDefault()}>
                {modalOpen && 
                    <TodoFormModal 
                        setModalOpen={setModalOpen}
                        sectionIndex={sectionIndex}
                        />
                }
                {content.map((todo, index) =>
                    <TodoCard
                        todo={todo} 
                        key={todo.id}
                        index={index}
                        sectionIndex={sectionIndex}
                        />
                )}
            </S.Content>
        </S.Container>
    )
}

export default TodosSection;