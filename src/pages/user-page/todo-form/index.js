import React from 'react';
import TextInput from '../../../components/text-input';
import { useForm } from '../../../hooks/use-form';
import DeadlineInput from './deadline-input';
import PriorityInput from './priority-input';
import * as S from './styles';
import TodoFormConfig from './todo-form-config';

const TodoForm = ({ onSubmit }) => {
    const { 
        fields, 
        handleChange, 
        handleSubmit 
    } = useForm(TodoFormConfig, onSubmit);

    const { 
        title, 
        description, 
        deadline, 
        priority 
    } = fields;
    
    return (
        <S.Form 
            autoComplete='off' 
            onSubmit={e => handleSubmit(e)}
            >
            <S.Title>Nova tarefa</S.Title>
            <S.Label>*Título da tarefa</S.Label>
            <TextInput    
                label='title'
                value={title.value}
                type='text'
                placeholder='Digite aqui ...'
                onChange={e => handleChange(e)}
                errorMessage={title.errorMessage}
                />
            <S.Label>Descrição da tarefa</S.Label>
            <TextInput    
                label='description'
                value={description.value}
                type='text'
                placeholder='Digite aqui ...'
                onChange={e => handleChange(e)}
                />
            <S.Label>Prazo de conclusão</S.Label>
            <DeadlineInput
                value={deadline.value}
                onChange={e => handleChange(e)}
                />
            <S.Label>Prioridade</S.Label>
            <PriorityInput
                value={priority.value}
                onChange={e => handleChange(e)}
                />
            <S.SubmitButton 
                type='submit' 
                onClick={(e) => handleSubmit(e)}
                >
                Finalizar
            </S.SubmitButton>
        </S.Form>
    )
};

export default TodoForm;