import React from 'react';

import { useDragTodo } from '../../hooks/use-drag-todo';
import PopupMenu from '../../ui/popup-menu/popup-menu';

import {useRemoveSection} from '../../hooks/use-remove-section'

import TodoCard from '../todo-card/todo-card/todo-card'
import TodoFormModal from '../todo-form-modal/todo-form-modal/todo-form-modal';

import * as S from './styles';

const TodosSection = ({ title, content, sectionIndex }) => {    
    const { removeSection } = useRemoveSection()

    const { onDragEnterSection, dragging } = useDragTodo()

    return (
        <S.Container>
            <S.Header>
                {title}  {'(' + content.length + ')'} 
                {title === 'Tarefas' ?
                    <TodoFormModal sectionIndex={sectionIndex}/>
                    :
                    <PopupMenu options={[{label: 'Remover seção', handler: () => removeSection(sectionIndex)}]}/>
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