import React from 'react';

import * as S from './styles'

import SelectDateModal from '../select-date-modal/selectDateModal';
import OptionalField from '../optional-field/optionalField';
import { useTodoForm } from '../../hooks/useForm';

const TodoForm = ({ sectionIndex, closeModal }) => {
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
    } = useTodoForm()

    const handleSubmit = (e) => {
        e.preventDefault();
        const added = addTodo(sectionIndex);
        if (added) closeModal()
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
            {description && 
                <OptionalField labelText={'Descrição'} onRemoveField={() => setDescription(false)}>
                    <S.TextField
                        autoFocus
                        ref={descriptionRef}
                        onKeyDown={e => e.key === 'Enter' && handleSubmit(e)}
                        placeholder= {'Digite aqui ...'}
                        /> 
                </OptionalField>
            }
            {deadline && 
                <OptionalField labelText={'Prazo'} onRemoveField={() => setDeadline(false)}> 
                    <SelectDateModal date={date} setDate={setDate}/>
                </OptionalField>
            }
            {priority && 
                <OptionalField labelText={'Prioridade'} onRemoveField={() => setPriority(false)}>
                    <S.Select id='priority' ref={priorityRef}>
                        <option value='Baixa'>Baixa</option>    
                        <option value='Media'>Média</option>
                        <option value='Alta'>Alta</option>
                    </S.Select>
                </OptionalField>
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
    )
};

export default TodoForm;