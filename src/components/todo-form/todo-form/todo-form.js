import React from 'react';

import Calendar from 'react-calendar';

import FormField from '../form-field/form-field'
import { useTodoForm } from '../../../hooks/use-todo-form'
import TextField from '../../../ui/text-field/text-field'

import * as S from './styles'

const TodoForm = ({ sectionIndex, onSubmit }) => {
    const { 
            fields, 
            handleChangeField, 
            handleHideField, 
            handleSubmit } = useTodoForm(sectionIndex, onSubmit);

    const { title, description, deadline, priority } = fields;

    return (
        <S.Form autoComplete='off' onSubmit={e => handleSubmit(e)}>
            <S.Title>Nova tarefa</S.Title>
            <S.Label>*Título da tarefa</S.Label>
            <TextField
                autoFocus
                value={title.value}
                onChange={e => handleChangeField(e.target.value, 'title')}
                placeholder= "Digite aqui ..."
                isInvalid={!!title.error}
                />
            <S.Error>{title.error}</S.Error>
            <FormField
                label='Descrição'
                hidden={description.hidden}
                onHideField={() => handleHideField('description', true)}
                >
                <TextField
                    autoFocus
                    hidden={description.hidden}
                    value={description.value}
                    placeholder='Digite aqui ...'
                    onChange={e => 
                        handleChangeField(e.target.value, 'description')
                    }/> 
            </FormField>
            <FormField
                label='Prazo'
                hidden={deadline.hidden}
                onHideField={() => handleHideField('deadline', true)}
                >
                <S.CalendarPopup 
                    nested 
                    position="top" 
                    arrow={false}
                    trigger=
                        <S.CalendarButton selected={!!deadline.value} type='button'>
                            {deadline.value ? 
                                deadline.value 
                                : 
                                'Selecione a data'
                            }
                        </S.CalendarButton>
                    >
                    <Calendar   
                        defaultValue={new Date()}
                        onClickDay={date => 
                            handleChangeField(
                                date.toLocaleDateString(),
                                'deadline'
                                )}/>
                </S.CalendarPopup> 
            </FormField>
            <FormField
                label='Prioridade'
                hidden={priority.hidden}
                onHideField={()=> handleHideField('priority', true)}
                >
                <S.PrioritySelect 
                    selected={!!priority.value}
                    onChange={e => 
                        handleChangeField(e.target.value, 'priority')
                    }>
                    <option hidden value= ''>Selecione a prioridade</option>
                    <option>Baixa</option>    
                    <option>Media</option>
                    <option>Alta</option>
                </S.PrioritySelect>
            </FormField>
            <S.AddFieldsDiv>
                <S.AddFieldButton 
                    type='button' 
                    hidden={!description.hidden} 
                    onClick={() => handleHideField('description', false)}
                    >
                    + adicionar descrição
                </S.AddFieldButton>
                <S.AddFieldButton
                    type='button' 
                    hidden={!deadline.hidden} 
                    onClick={() => handleHideField('deadline', false)}
                    >
                    + adicionar prazo
                </S.AddFieldButton>
                <S.AddFieldButton 
                    type='button' 
                    hidden={!priority.hidden} 
                    onClick={() => handleHideField('priority', false)}
                    >
                    + adicionar prioridade
                </S.AddFieldButton>
            </S.AddFieldsDiv>
            <S.SubmitButton type='button' onClick={(e) => handleSubmit(e)}>
                Finalizar
            </S.SubmitButton>
        </S.Form>
    )
};

export default TodoForm;