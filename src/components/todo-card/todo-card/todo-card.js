import React from 'react';

import * as S from './styles'

import CardProperty from '../card-property/card-property'

import { useDragTodo } from '../../../hooks/use-drag-todo';

const TodoCard = ({ todo, index, sectionIndex }) => {
    const { dragItem, dragStart, dragEnter, dragging } = useDragTodo()

    return (
        <S.DragShadow
            isBeingDragged={ dragging && dragItem.current.index === index && dragItem.current.sectionIndex === sectionIndex }>
            <S.Wrapper
                draggable
                onDragStart={e => dragStart(e, {index, sectionIndex})}
                onDragEnter={e => dragEnter(e, {index, sectionIndex})}
                onDragOver={e => e.preventDefault()}
                onDrop={e => e.preventDefault()} 
                isBeingDragged={ dragging && dragItem.current.index === index && dragItem.current.sectionIndex === sectionIndex } >
                <S.Header>
                    {todo.priority && 
                        <S.Priority priority={todo.priority}>
                            {todo.priority}
                        </S.Priority>
                    }
                </S.Header>
                <S.Content>
                    <S.Title>
                        {todo.title}
                    </S.Title>
                    {todo.description && 
                        <CardProperty icon={'description'} text={'DESCRIÇÃO'}>
                            {todo.description}
                        </CardProperty>
                    }
                    {todo.deadline &&
                        <CardProperty icon={'deadline'} text={'PRAZO'}>
                            {todo.deadline}
                        </CardProperty>
                    }
                </S.Content>
            </S.Wrapper>
        </S.DragShadow>
    )
}

export default TodoCard;