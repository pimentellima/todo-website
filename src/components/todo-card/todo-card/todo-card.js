import React from 'react';

import * as S from './styles';

import { useRemoveTodo } from '../../../hooks/use-remove-todo';

import PopupMenu from '../../popup-menu/popup-menu';

import CardProperty from '../card-property/card-property';

import { useDragTodo } from '../../../hooks/use-drag-todo';

const TodoCard = ({ todo, index, sectionIndex }) => {
    const { dragItem, onDragStart, onDragEnterCard, dragging } = useDragTodo();
    const { removeTodo } = useRemoveTodo();

    const isBeingDragged =  
        dragging && 
        dragItem.current.index === index && 
        dragItem.current.sectionIndex === sectionIndex;

    return (
        <S.DragShadow
            isBeingDragged={ isBeingDragged }>
            <S.Wrapper
                draggable
                onDragStart={e => onDragStart(e, {index, sectionIndex})}
                onDragEnter={e => onDragEnterCard(e, {index, sectionIndex})}
                onDragOver={e => e.preventDefault()}
                onDrop={e => e.preventDefault()} 
                isBeingDragged={ isBeingDragged } >
                <S.Header>
                    <PopupMenu 
                        position='bottom left'
                        options={[
                            {
                                label:'Remover tarefa', 
                                handler: () => removeTodo(index, sectionIndex)
                            }
                    ]}/>
                    {todo.priority &&
                        <S.Priority 
                            priority={todo.priority}
                            >
                            {todo.priority}
                        </S.Priority>
                    }
                </S.Header>
                <S.Content>
                    <S.Title>
                        {todo.title}
                    </S.Title>
                    {todo.description && 
                        <CardProperty 
                            icon={'description'} 
                            text={'DESCRIÇÃO'}
                            >
                            {todo.description}
                        </CardProperty>
                    }
                    {todo.deadline &&
                        <CardProperty 
                            icon={'deadline'} 
                            text={'PRAZO'}
                            >
                            {todo.deadline}
                        </CardProperty>
                    }
                </S.Content>
            </S.Wrapper>
        </S.DragShadow>
    )
}

export default TodoCard;