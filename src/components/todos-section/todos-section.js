import React from 'react';

import { useDragTodo } from '../../hooks/use-drag-todo';
import PopupMenu from '../popup-menu/popup-menu';

import {useRemoveSection} from '../../hooks/use-remove-section'

import TodoFormModal from '../todo-form-modal/todo-form-modal/todo-form-modal';

import TodoCard from '../todo-card/todo-card/todo-card';

import * as S from './styles';
import { useRemoveContent } from '../../hooks/use-remove-content';

const TodosSection = ({ title, content, sectionIndex }) => {    
    const { removeSection } = useRemoveSection();
    
    const { removeContent } = useRemoveContent();

    const { onDragEnterSection, dragging } = useDragTodo();

    return (
        <S.Container>
            <S.Header>
                {title} {'(' + content.length + ')'} 
                {sectionIndex === 0 ?
                    <TodoFormModal sectionIndex={sectionIndex}/>
                    :
                    <PopupMenu 
                        position='bottom right'
                        options={[ 
                            {
                                label: 'Remover seção', 
                                handler: () => removeSection(sectionIndex)
                            }, 
                            {
                                label: 'Remover tarefas', 
                                handler: () => removeContent(sectionIndex)
                            }
                            ]}/>
                }
            </S.Header>
            <S.Content 
                draggable={dragging.toString()}
                onDragEnter={e => onDragEnterSection(e, sectionIndex)}
                onDragOver={e => e.preventDefault()}
                onDrop={(e) => e.preventDefault()}>
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