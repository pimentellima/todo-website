import React from 'react';
import { useRemoveTodo } from '../section/use-remove-todo';
import { useDragTodo } from '../use-drag-todo';
import Content from './content';
import Header from './header';
import * as S from './styles';

const Card = (props) => {
    const { todo, index, sectionIndex } = props;
    
    const { 
        dragging, 
        dragItem, 
        onDragStart, 
        onDragEnterCard 
    } = useDragTodo();

    const removeTodo = useRemoveTodo();

    const isBeingDragged =  
        dragging && 
        dragItem.current.index === index && 
        dragItem.current.sectionIndex === sectionIndex;

    return (
        <S.Shadow isBeingDragged={isBeingDragged}>
            <S.Wrapper
                draggable
                onDragStart={e => onDragStart(
                    e, {index, sectionIndex}
                    )}
                onDragEnter={e => onDragEnterCard(
                    e, {index, sectionIndex}
                    )}
                onDragOver={e => e.preventDefault()}
                onDrop={e => e.preventDefault()} 
                isBeingDragged={isBeingDragged}
                >
                <Header
                    priority={todo.priority}
                    index={index}
                    sectionIndex={sectionIndex}
                    removeTodo={removeTodo}
                    />
                <Content
                    title={todo.title}
                    description={todo.description}
                    deadline={todo.deadline}
                    />
            </S.Wrapper>
        </S.Shadow>
    )
};

export default Card;