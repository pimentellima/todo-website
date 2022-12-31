import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import { useDragTodo } from '../../../hooks/use-drag-todo';
import PopupMenu from '../../../components/popup-menu/popup-menu';
import TodoCard from '../todo-card/todo-card'
import TodoForm from '../todo-form/todo-form'

import * as S from './styles';
import { useUserTodos } from '../../../hooks/use-user-todos';

const TodosSection = (props) => {    
    const { title, content, sectionIndex } = props;

    const { onDragEnterSection, dragging } = useDragTodo();
    const { userTodos, setUserTodos } = useUserTodos();
    
    const [formOpen, setFormOpen] = useState(false);

    const onSubmitTodo = (data) => {
        const todo = {};
        Object.keys(data).map(key => {
            todo[key] = data[key].value;
        });
        todo.id = crypto.randomUUID();
        addTodo(todo);
        setFormOpen(false);
    };
    
    const addTodo = (todoObj) => {
        const newTodos = [...userTodos];
        const section = newTodos[sectionIndex];
        section.content.push(todoObj);
        newTodos.splice(sectionIndex, 1, section);
        setUserTodos(newTodos);
    };

    const removeSection = (sectionIndex) => {
        const newTodos = [...userTodos];
        newTodos.splice(sectionIndex, 1);
        setUserTodos(newTodos);
    };

    const removeContent = (sectionIndex) => {
        const newTodos = [...userTodos];
        const newSection = newTodos[sectionIndex];
        newSection.content.splice(0);
        newTodos.splice(sectionIndex, 1, newSection);
        setUserTodos(newTodos);
    };

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
                            onSubmit={(data) => onSubmitTodo(data)}
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