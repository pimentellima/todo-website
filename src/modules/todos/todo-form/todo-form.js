import React from 'react';
import { useForm } from '../../../shared-hooks/use-form'
import TodoFormConfig from '../todo-form-config';
import TextInput from '../../../shared-components/text-input/text-input';
import Calendar from 'react-calendar';
import * as S from './styles'

const TodoForm = ({ onSubmit }) => {
    const { 
        fields, 
        handleChange, 
        handleSubmit 
    } = useForm(TodoFormConfig, onSubmit);

    const { title, description, deadline, priority } = fields;
    
    return (
        <S.Form autoComplete='off' onSubmit={e => handleSubmit(e)}>
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
            <S.CalendarPopup 
                nested 
                position="top" 
                arrow={false}
                trigger={
                    <S.PopupButton type='button'>
                        {
                            deadline.value ? 
                                deadline.value 
                                : 
                                'Selecione uma data'
                        }
                    </S.PopupButton>}
                >
                <Calendar 
                    defaultValue={new Date()} 
                    onChange={e => { 
                        e.target={
                            name: 'deadline', 
                            value: e.toLocaleDateString()
                        };
                        handleChange(e);
                        }}
                    />
            </S.CalendarPopup> 
            <S.Label>Prioridade</S.Label>
            <S.Select 
                name='priority'
                value={priority.value}
                onChange={e => handleChange(e)}
                >
                <option value=''>Selecione uma opção</option>
                <option value='Baixa'>Baixa</option>    
                <option value='Media'>Media</option>
                <option value='Alta'>Alta</option>
            </S.Select>
            <S.SubmitButton type='submit' onClick={(e) => handleSubmit(e)}>
                Finalizar
            </S.SubmitButton>
        </S.Form>
    )
};

export default TodoForm;