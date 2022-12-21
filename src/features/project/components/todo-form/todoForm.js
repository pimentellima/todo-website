import React, { useRef, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { useData } from '../../../../hooks/useData'

import * as S from './todoFormStyles'

import Calendar from './calendar';
import Field from './field';

const TodoForm = ({ sectionIndex, handleCloseModal }) => {
    const [calendarOpen, setCalendarOpen] = useState(false);
    const [priority, setPriority] = useState(false);
    const [description, setDescription] = useState(false);
    const [deadline, setDeadline] = useState(false);
    const [error, setError] = useState('');
    const [date, setDate] = useState(new Date());

    const { todos, setTodos } = useData();
    
    const titleRef = useRef();
    const descriptionRef = useRef();
    const priorityRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(titleRef.current.value === '') {
            setError('Não pode ser vazio');
            return;
        } 

        const todo = new Object();
        todo.title = titleRef.current.value;
        todo.description = description ? descriptionRef.current.value : '';
        todo.priority = priority ? priorityRef.current.value : '';
        todo.deadline = deadline ? date.toLocaleDateString() : '';
        todo.id = uuidv4();

        const newTodos = [...todos];
        const section = newTodos[sectionIndex];
        section.content.push(todo);
        newTodos.splice(sectionIndex, 1, section);
        setTodos(newTodos);
        handleCloseModal();
    }

    return (
        <S.Form autoComplete='off' onSubmit={e => handleSubmit(e)}>
            <S.Title>Nova tarefa</S.Title>
            <S.Label htmlFor=''>*Título da tarefa</S.Label>
            <S.TextField
                autoFocus
                ref={titleRef}
                onChange={() => setError('')}
                onKeyDown={e => e.key === 'Enter' && handleSubmit(e)}
                placeholder= "Digite aqui ..."
                isInvalid={!!error} 
                />
            <S.Error>{error}</S.Error>
            <Field hidden={!description} label={'Descrição'} onRemove={() => setDescription(false)}>
                <S.TextField
                    autoFocus
                    ref={descriptionRef}
                    onKeyDown={e => e.key === 'Enter' && handleSubmit(e)}
                    placeholder= {'Digite aqui ...'}
                    /> 
            </Field>
            <Field hidden={!deadline} label={'Prazo'} onRemove={() => setDeadline(false)}> 
               <Calendar
                    open={calendarOpen}
                    setOpen={setCalendarOpen}
                    date={date}
                    setDate={setDate}
                    />
            </Field>
            <Field hidden={!priority} label={'Prioridade'} onRemove={() => setPriority(false)}>
                <S.Select id='priority' ref={priorityRef}>
                    <option value='Baixa'>Baixa</option>    
                    <option value='Media'>Média</option>
                    <option value='Alta'>Alta</option>
                </S.Select>
            </Field>
            <S.ButtonsContainer>
                <S.AddButton type='button' hidden={description} onClick={() => setDescription(true)}>
                    + adicionar descrição
                </S.AddButton>
                <S.AddButton type='button' hidden={deadline} onClick={() => setDeadline(true)}>
                    + adicionar prazo
                </S.AddButton>
                <S.AddButton type='button' hidden={priority} onClick={() => setPriority(true)}>
                    + adicionar prioridade
                </S.AddButton>
            </S.ButtonsContainer>
            <S.SubmitButton onClick={(e) => handleSubmit(e)}>Finalizar</S.SubmitButton>
        </S.Form>
    )
};

export default TodoForm;