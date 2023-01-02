import React from 'react';
import { useForm } from '../../../../shared-hooks/use-form'
import TodoFormConfig from '../../../../config/todo-form-config';
import TitleField from '../../form-fields/title-field/title-field'
import PriorityField from '../../form-fields/priority-field/priority-field'
import DeadlineField from '../../form-fields/deadline-field/deadline-field'
import DescriptionField from '../../form-fields/description-field/description-field'
import { useHiddenFields } from './use-hidden-fields';
import * as S from './styles'

const TodoForm = ({ onSubmit }) => {
    const [hiddenFields, toggleHide] = useHiddenFields();

    const { 
        fields, 
        handleChange, 
        handleSubmit 
    } = useForm(TodoFormConfig, onSubmit);

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
                hidden={hiddenFields.description}
                onChange={handleChange}
                onHide={(field) => toggleHide(field)}
                />
            <DeadlineField
                value={deadline.value}
                onChange={handleChange}
                hidden={hiddenFields.deadline}
                onHide={(field) => toggleHide(field)}
                />
            <PriorityField
                value={priority.value}  
                onChange={handleChange}
                hidden={hiddenFields.priority}
                onHide={(field) => toggleHide(field)}
                />
            <S.AddFieldDiv>
            <S.AddFieldButton 
                    hidden={!hiddenFields.description}
                    type='button'
                    onClick={() => toggleHide('description')}
                    >
                    + Adicionar descrição
                </S.AddFieldButton>
                <S.AddFieldButton 
                    hidden={!hiddenFields.deadline}
                    type='button'
                    onClick={() => toggleHide('deadline')}
                    >
                    + Adicionar prazo
                </S.AddFieldButton>
                <S.AddFieldButton 
                    hidden={!hiddenFields.priority}
                    type='button'
                    onClick={() => toggleHide('priority')}
                    >
                    + Adicionar prioridade
                </S.AddFieldButton>
            </S.AddFieldDiv>
            <S.SubmitButton type='button' onClick={(e) => handleSubmit(e)}>
                Finalizar
            </S.SubmitButton>
        </S.Form>
    )
};

export default TodoForm;