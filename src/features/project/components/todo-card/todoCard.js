import React from 'react';

import * as S from './todoCardStyles'

import Label from './label';

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
                        <Label icon={'description'} text={'DESCRIÇÃO'}>
                            <S.Span>
                                {todo.description}
                            </S.Span>
                        </Label>
                    }
                    {todo.deadline &&
                        <Label icon={'deadline'} text={'PRAZO'}>
                            <S.Span>
                                {todo.deadline}
                            </S.Span>
                        </Label>
                    }
                </S.Content>
            </S.Wrapper>
        </S.DragShadow>
    )
}

export default TodoCard;