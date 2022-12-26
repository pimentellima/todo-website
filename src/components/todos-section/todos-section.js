import React, { useState } from 'react';

import { useDragTodo } from '../../hooks/use-drag-todo';

import PopupMenu from '../popup-menu/popup-menu';
import Popup from 'reactjs-popup';
import TodoForm from '../todo-form/todo-form/todo-form'
import TodoCard from '../todo-card/todo-card';

import { useRemoveSection } from '../../hooks/use-remove-section'
import { useRemoveContent } from '../../hooks/use-remove-content';

import * as S from './styles';

const TodosSection = ({ title, content, sectionIndex }) => {    
    const [formOpen, setFormOpen] = useState(false);
    
    const { onDragEnterSection, dragging } = useDragTodo();
    const { removeSection } = useRemoveSection();
    const { removeContent } = useRemoveContent();

    return (
        <S.Container>
            <S.Header>
                {title} {'(' + content.length + ')'} 
                {sectionIndex === 0 ?
                    <Popup 
                        nested
                        open={formOpen}
                        position='right top'
                        trigger=<S.ModalButton>+</S.ModalButton>
                        onOpen={() => setFormOpen(true)}
                        arrow={false}
                        >
                        <TodoForm 
                            sectionIndex={sectionIndex}
                            onSubmit={() => setFormOpen(false)} 
                            />
                    </Popup>
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