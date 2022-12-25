import React, { useState } from 'react';

import Calendar from 'react-calendar';

import * as S from './styles'
import Popup from 'reactjs-popup';
import { useTodoForm } from '../../../hooks/use-todo-form';
import FormField from '../form-field/form-field';

const TodoFormModal = ({ sectionIndex }) => {
    const [open, setOpen] = useState(false);

    const { 
            fields, 
            handleChangeField, 
            handleHideField, 
            handleSubmit } = useTodoForm(
            sectionIndex, 
            () => setOpen(false)
        );

    const { title, description, deadline, priority } = fields;

    return (
        <Popup 
            nested
            open={open}
            position='right top'
            trigger=<S.ModalButton>+</S.ModalButton>
            onOpen={() => setOpen(true)}
            arrow={false}
            >
            <S.HideScreen onClick={() => setOpen(false)}/>
            <S.Form autoComplete='off' onSubmit={e => handleSubmit(e)}>
                <S.Title>Nova tarefa</S.Title>
                <S.Label>*Título da tarefa</S.Label>
                <S.TextField
                    autoFocus
                    value={title.value}
                    onChange={e => handleChangeField(e.target.value, 'title')}
                    placeholder= "Digite aqui ..."
                    />
                <S.Error>{title.error}</S.Error>
                <FormField
                    label='Descrição'
                    hidden={description.hidden}
                    onHideField={() => handleHideField('description', true)}
                    >
                    <S.TextField
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
                            <S.Button type='button'>
                                {deadline.value ? 
                                    deadline.value 
                                    : 
                                    'Selecione a data'
                                }
                            </S.Button>
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
                    <S.Select 
                        onChange={e => 
                            handleChangeField(e.target.value, 'priority')
                        }>
                        <option value= ''>Selecione a prioridade</option>
                        <option>Baixa</option>    
                        <option>Media</option>
                        <option>Alta</option>
                    </S.Select>
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
        </Popup>
    )
};

export default TodoFormModal;