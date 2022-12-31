import React from 'react';
import { useForm } from '../../../hooks/use-form'
import TodoFormConfig from '../../../config/todo-form-config';
import PriorityField from '../todo-form-fields/priority-field/priority-field'
import DeadlineField from '../todo-form-fields/deadline-field/deadline-field'
import DescriptionField from '../todo-form-fields/description-field/description-field'
import TitleField from '../todo-form-fields/title-field/title-field';

import * as S from './styles'

const TodoForm = ({ onSubmit }) => {
    const { fields, handleChange, handleSubmit } = useForm(TodoFormConfig, onSubmit);
    const { title, description, deadline, priority } = fields;

    return (
        <S.Form autoComplete='off' onSubmit={e => handleSubmit(e)}>
            <S.Title>Nova tarefa</S.Title>
            <TitleField 
                value={title.value}
                errorMessage={title.errorMessage}
                onChange={handleChange}
                />
            <DescriptionField 
                value={description.value}
                errorMessage={description.errorMessage}
                onChange={handleChange}
                hidden={false}
                handlehide={() => {}}
                />
            <DeadlineField
                value={deadline.value}
                onChange={handleChange}
                hidden={false}
                handlehide={() => {}}
                />
            <PriorityField
                value={priority.value}  
                onChange={handleChange}
                hidden={false}
                handlehide={() => {}}
                />
            <S.AddFieldsDiv>
            </S.AddFieldsDiv>
            <S.SubmitButton type='button' onClick={(e) => handleSubmit(e)}>
                Finalizar
            </S.SubmitButton>
        </S.Form>
    )
};

export default TodoForm;