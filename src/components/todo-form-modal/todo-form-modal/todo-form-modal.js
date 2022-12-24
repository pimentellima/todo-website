import React from 'react';

import Popup from 'reactjs-popup';

import * as S from './styles'

import RemovableField from '../removable-field/removable-field';
import CalendarField from '../calendar-field/calendar-field'
import { useCreateTodo } from '../../../hooks/use-create-todo';

const TodoFormModal = ({ setModalOpen, sectionIndex }) => {
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
        if (added) setModalOpen(false)
    }

    return (
        <Popup 
            nested
            open={true}
            arrow={false}
            closeOnDocumentClick={false}
            >
            <S.HideScreen onClick={() => setModalOpen(false)}/>
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
                {description && 
                    <RemovableField labelText={'Descrição'} onRemoveField={() => setDescription(false)}>
                        <S.TextField
                            autoFocus
                            ref={descriptionRef}
                            onKeyDown={e => e.key === 'Enter' && handleSubmit(e)}
                            placeholder= {'Digite aqui ...'}
                            /> 
                    </RemovableField>
                }
                {deadline && 
                    <RemovableField labelText={'Prazo'} onRemoveField={() => setDeadline(false)}> 
                        <CalendarField date={date} setDate={setDate}/>
                    </RemovableField>
                }
                {priority && 
                    <RemovableField labelText={'Prioridade'} onRemoveField={() => setPriority(false)}>
                        <S.Select id='priority' ref={priorityRef}>
                            <option value='Baixa'>Baixa</option>    
                            <option value='Media'>Média</option>
                            <option value='Alta'>Alta</option>
                        </S.Select>
                    </RemovableField>
                }
                <S.AddFieldsSection>
                    <S.AddButton type='button' hidden={description} onClick={() => setDescription(true)}>
                        + adicionar descrição
                    </S.AddButton>
                    <S.AddButton type='button' hidden={deadline} onClick={() => setDeadline(true)}>
                        + adicionar prazo
                    </S.AddButton>
                    <S.AddButton type='button' hidden={priority} onClick={() => setPriority(true)}>
                        + adicionar prioridade
                    </S.AddButton>
                </S.AddFieldsSection>
                <S.SubmitButton onClick={(e) => handleSubmit(e)}>Finalizar</S.SubmitButton>
                </S.Form>
        </Popup>
    )
};

export default TodoFormModal;