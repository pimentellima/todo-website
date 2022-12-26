import React from 'react';

import * as S from './styles';

import { useRemoveTodo } from '../../hooks/use-remove-todo';

import PopupMenu from '../popup-menu/popup-menu';

import { GrTextAlignLeft, GrCalendar } from "react-icons/gr";

import { useDragTodo } from '../../hooks/use-drag-todo';

const TodoCard = ({ todo, index, sectionIndex }) => {
    const { dragging, dragItem, onDragStart, onDragEnterCard } = useDragTodo();
    const { removeTodo } = useRemoveTodo();

    const isBeingDragged =  
        dragging && 
        dragItem.current.index === index && 
        dragItem.current.sectionIndex === sectionIndex;

    return (
        <S.CardShadow isBeingDragged={isBeingDragged}>
            <S.CardWrapper
                draggable
                onDragStart={e => onDragStart(e, {index, sectionIndex})}
                onDragEnter={e => onDragEnterCard(e, {index, sectionIndex})}
                onDragOver={e => e.preventDefault()}
                onDrop={e => e.preventDefault()} 
                isBeingDragged={isBeingDragged}
                >
                <S.CardHeader>
                    <PopupMenu 
                        position='right bottom'
                        options={[
                            {
                                label:'Remover tarefa', 
                                handler: () => removeTodo(index, sectionIndex)
                            }
                    ]}/>
                    {todo.priority &&
                        <S.Priority priority={todo.priority}>
                            {todo.priority}
                        </S.Priority>
                    }
                </S.CardHeader>
                <S.CardContent>
                    <S.Title>
                        {todo.title}
                    </S.Title>
                    {todo.description && 
                        <S.PropertyWrapper>
                            <S.PropertyHeader> 
                                <GrTextAlignLeft/>
                                <S.Label>
                                    DESCRIÇÃO
                                </S.Label>
                            </S.PropertyHeader>
                            <S.Span>
                                {todo.description}
                            </S.Span>
                        </S.PropertyWrapper> 
                    }
                    {todo.deadline &&
                        <S.PropertyWrapper>
                            <S.PropertyHeader> 
                                <GrCalendar/>
                                <S.Label>
                                    PRAZO
                                </S.Label>
                            </S.PropertyHeader>
                            <S.Span>
                                {todo.deadline}
                            </S.Span>
                        </S.PropertyWrapper> 
                    }
                </S.CardContent>
            </S.CardWrapper>
        </S.CardShadow>
    )
}

export default TodoCard;