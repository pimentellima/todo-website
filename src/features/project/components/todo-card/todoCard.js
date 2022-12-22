import React from 'react';

import * as S from './styles'

import CardLabel from '../card-label/cardLabel';

import { useDrag } from '../../hooks/useDrag';

const TodoCard = ({ todo, index, sectionIndex }) => {
    const { dragItem, dragStart, dragEnter, dragging } = useDrag()

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
                        <CardLabel icon={'description'} text={'DESCRIÇÃO'}>
                            <S.Span>
                                {todo.description}
                            </S.Span>
                        </CardLabel>
                    }
                    {todo.deadline &&
                        <CardLabel icon={'deadline'} text={'PRAZO'}>
                            <S.Span>
                                {todo.deadline}
                            </S.Span>
                        </CardLabel>
                    }
                </S.Content>
            </S.Wrapper>
        </S.DragShadow>
    )
}

export default TodoCard;