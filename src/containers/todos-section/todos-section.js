import React from 'react';
import { useState } from 'react';
import Popup from 'reactjs-popup';
import { useAddTodo } from '../../hooks/use-add-todo';
import { useDragTodo } from '../../hooks/use-drag-todo';
import { useRemoveContent } from '../../hooks/use-remove-content';
import { useRemoveSection } from '../../hooks/use-remove-section';
import PopupMenu from '../popup-menu/popup-menu';
import TodoCard from '../todo-card/todo-card';
import TodoForm from '../todo-form/todo-form';
import * as S from './styles';

const TodosSection = (props) => {    
    const { title, content, sectionIndex } = props;
    const [formOpen, setFormOpen] = useState(false);
    const { onDragEnterSection, dragging } = useDragTodo();
    const addTodo = useAddTodo();
    const removeSection = useRemoveSection();
    const removeContent = useRemoveContent();

    const onSubmitTodo = (data) => {
        addTodo(data, sectionIndex);
        setFormOpen(false);
    };
    
    return (
        <S.Container>
            <S.Header>
                    <S.Title>{title}</S.Title> {'(' + content.length + ')'}
                <S.ButtonsDiv>
                    {sectionIndex === 0 &&
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
                                onSubmit={(data) => onSubmitTodo(data)}
                                />
                        </Popup>
                    }
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
                </S.ButtonsDiv>
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