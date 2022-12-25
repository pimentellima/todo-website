import React, { useState } from 'react';

import Popup from 'reactjs-popup';

import * as S from './styles'

import CalendarField from '../calendar-field/calendar-field'
import { useCreateTodo } from '../../../hooks/use-create-todo';
import PopupMenu from '../../popup-menu/popup-menu'

const TodoFormModal = ({ sectionIndex }) => {
    const [open, setOpen] = useState(false)

    const {
        priority,
        description,
        deadline,
        error,
        date,
        titleRef,
        descriptionRef,
        priorityRef,
        setPriority,
        setDescription,
        setDeadline,
        setError,
        setDate,
        addTodo
    } = useCreateTodo()

    const handleSubmit = (e) => {
        e.preventDefault();
        const added = addTodo(sectionIndex);
        if (added) setOpen(false)
    }

    return (
        <Popup 
            nested
            open={open}
            offsetX={5}
            offsetY={5}
            trigger=<S.ModalButton>+</S.ModalButton>
            onOpen={() => setOpen(true)}
            arrow={false}
            closeOnDocumentClick={false}
            >
            <S.HideScreen onClick={() => setOpen(false)}/>
            <S.Form autoComplete='off' onSubmit={e => handleSubmit(e)}>
                <S.Title>Nova tarefa</S.Title>
                <div>
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
                </div>
                <div hidden={!description}>
                    <S.Label htmlFor=''>
                        Descrição
                        <PopupMenu options={ [{label:'Remover campo', handler: () => setDescription(false)}] }/>
                    </S.Label>
                    <S.TextField
                        autoFocus
                        ref={descriptionRef}
                        onKeyDown={e => e.key === 'Enter' && handleSubmit(e)}
                        placeholder= {'Digite aqui ...'}
                        /> 
                </div>
                <div hidden={!deadline}>
                    <S.Label htmlFor=''>
                        Prazo
                        <PopupMenu options={ [{label:'Remover campo', handler: () => setDeadline(false)}] }/>
                    </S.Label>
                    <CalendarField date={date} setDate={setDate}/>
                </div>
                <div hidden={!priority}>
                    <S.Label htmlFor=''>
                        Prioridade
                        <PopupMenu options={ [{label:'Remover campo', handler: () => setPriority(false)}] }/>
                    </S.Label>
                    <S.Select id='priority' ref={priorityRef}>
                        <option value='Baixa'>Baixa</option>    
                        <option value='Media'>Média</option>
                        <option value='Alta'>Alta</option>
                    </S.Select>
                </div>
                <S.AddFieldsDiv>
                    <S.AddFieldButton type='button' hidden={description} onClick={() => setDescription(true)}>
                        + adicionar descrição
                    </S.AddFieldButton>
                    <S.AddFieldButton type='button' hidden={deadline} onClick={() => setDeadline(true)}>
                        + adicionar prazo
                    </S.AddFieldButton>
                    <S.AddFieldButton type='button' hidden={priority} onClick={() => setPriority(true)}>
                        + adicionar prioridade
                    </S.AddFieldButton>
                </S.AddFieldsDiv>
                <S.SubmitButton onClick={(e) => handleSubmit(e)}>Finalizar</S.SubmitButton>
                </S.Form>
        </Popup>
    )
};

export default TodoFormModal;