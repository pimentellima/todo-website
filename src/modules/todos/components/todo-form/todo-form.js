import React from 'react';
import TitleField from '../../form-fields/title-field/title-field'
import PriorityField from '../../form-fields/priority-field/priority-field'
import DeadlineField from '../../form-fields/deadline-field/deadline-field'
import DescriptionField from '../../form-fields/description-field/description-field'
import { useForm } from '../../../../shared-hooks/use-form'
import { useHideFields } from '../../hooks/use-hide-field'
import TodoFormConfig from '../../todo-form-config';
import * as S from './styles'

const TodoForm = ({ onSubmit }) => {
    const [hideFields, toggleHide] = useHideFields();

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
                hidden={hideFields.description}
                onChange={handleChange}
                onHide={(field) => toggleHide(field)}
                />
            <DeadlineField
                value={deadline.value}
                hidden={hideFields.deadline}
                onChange={handleChange}
                onHide={(field) => toggleHide(field)}
                />
            <PriorityField
                value={priority.value}  
                hidden={hideFields.priority}
                onChange={handleChange}
                onHide={(field) => toggleHide(field)}
                />
            <S.AddFieldDiv>
            <S.AddFieldButton 
                    hidden={!hideFields.description}
                    type='button'
                    onClick={() => toggleHide('description')}
                    >
                    + Adicionar descrição
                </S.AddFieldButton>
                <S.AddFieldButton 
                    hidden={!hideFields.deadline}
                    type='button'
                    onClick={() => toggleHide('deadline')}
                    >
                    + Adicionar prazo
                </S.AddFieldButton>
                <S.AddFieldButton 
                    hidden={!hideFields.priority}
                    type='button'
                    onClick={() => toggleHide('priority')}
                    >
                    + Adicionar prioridade
                </S.AddFieldButton>
            </S.AddFieldDiv>
            <S.SubmitButton type='submit' onClick={(e) => handleSubmit(e)}>
                Finalizar
            </S.SubmitButton>
        </S.Form>
    )
};

export default TodoForm;