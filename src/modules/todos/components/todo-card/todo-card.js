import React from 'react';
import * as S from './styles';
import { GrTextAlignLeft, GrCalendar } from "react-icons/gr";
import { useDragTodo } from '../../hooks/use-drag-todo';
import CardMenu from './card-menu';

const TodoCard = (props) => {
    const { todo, index, sectionIndex } = props;
    const { dragging, dragItem, onDragStart, onDragEnterCard } = useDragTodo();

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
                    <CardMenu/>
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