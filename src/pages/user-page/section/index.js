import React from 'react';
import { useState } from 'react';
import Popup from 'reactjs-popup';
import Card from '../card';
import PopupMenu from '../popup-menu';
import TodoForm from '../todo-form';
import { useDragTodo } from '../use-drag-todo';
import Header from './header';
import * as S from './styles';
import { useAddTodo } from './use-add-todo';
import { useRemoveContent } from './use-remove-content';
import { useRemoveSection } from './use-remove-section';

const Section = (props) => {    
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
        <S.Wrapper>
            <Header
                title={title}
                length={content.length}
                >
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
            </Header>
            <S.Content 
                draggable={dragging.toString()}
                onDragEnter={e => onDragEnterSection(e, sectionIndex)}
                onDragOver={e => e.preventDefault()}
                onDrop={e => e.preventDefault()}>
                {content.map((todo, index) =>
                    <Card
                        todo={todo} 
                        key={todo.id}
                        index={index}
                        sectionIndex={sectionIndex}
                        />
                )}
            </S.Content>
        </S.Wrapper>
    )
};

export default Section;