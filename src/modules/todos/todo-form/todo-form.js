import React from 'react';

import { useTodoForm } from '../../../hooks/use-todo-form'

import * as S from './styles'

const TodoForm = ({ sectionIndex, onSubmit }) => {
    const { 
        renderFields, 
        renderButtons, 
        handleSubmit } = useTodoForm(sectionIndex, onSubmit);

    return (
        <S.Form autoComplete='off' onSubmit={e => handleSubmit(e)}>
            <S.Title>Nova tarefa</S.Title>
            {renderFields()}
            <S.AddFieldsDiv>
                {renderButtons()}
            </S.AddFieldsDiv>
            <S.SubmitButton type='button' onClick={(e) => handleSubmit(e)}>
                Finalizar
            </S.SubmitButton>
        </S.Form>
    )
};

export default TodoForm;