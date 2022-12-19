import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as Styled from './styles'
import Calendar from 'react-calendar';
import Popup from 'reactjs-popup';
import OptionsButton from '../optionsButton'
import { Input } from '../input/styles';
import { useSections } from '../../hooks/useSections';

export const CardMenu = ({ listIndex, setCreating }) => {
    const [calendarOpen, setCalendarOpen] = useState(false)
    const [priority, setPriority] = useState(false)
    const [description, setDescription] = useState(false)
    const [deadline, setDeadline] = useState(false);
    const [error, setError] = useState('')
    const [date, setDate] = useState(new Date())

    const { addCard } = useSections()
    
    const titleRef = useRef()
    const descriptionRef = useRef()
    const priorityRef = useRef()    

    const handleSubmit = (e) => {
        e.preventDefault()

        if(titleRef.current.value === '') {
            setError('Não pode ser vazio');
            return;
        } 

        const card = new Object()
        card.title = titleRef.current.value
        card.description = description ? descriptionRef.current.value : ''
        card.priority = priority ? priorityRef.current.value : ''
        card.deadline = deadline ? date.toLocaleDateString() : ''
        card.id = uuidv4()

        addCard(card, listIndex)

        setCreating(false)
    }

    return (
        <Styled.Content>
            <Styled.Form autoComplete='off' onSubmit={e => handleSubmit(e)}>
                <Styled.Title>Nova tarefa</Styled.Title>
                <Styled.Label htmlFor=''>*Título da tarefa</Styled.Label>
                <Input
                    autoFocus
                    ref={titleRef}
                    onChange={() => setError('')}
                    onKeyDown={e => e.key === 'Enter' && handleSubmit(e)}
                    placeholder= "Digite aqui ..."
                    isInvalid={!!error} 
                    />
                <Styled.Error>{error}</Styled.Error>
                {description && 
                    <>
                        <Styled.Label htmlFor=''>
                            Descrição 
                            <OptionsButton options={[{ handler: () => setDescription(false), label: 'Remover campo' }]}/>
                        </Styled.Label>
                        <Input
                            autoFocus
                            ref={descriptionRef}
                            onKeyDown={e => e.key === 'Enter' && handleSubmit(e)}
                            placeholder= "Digite aqui ..."
                            /> 
                    </>
                }
                {deadline &&
                    <>
                        <Styled.Label htmlFor=''>
                            Prazo
                            <OptionsButton options={[{ handler: () => setDeadline(false), label: 'Remover campo' }]}/>
                        </Styled.Label>
                        <Styled.CalendarButton id='calendar' type='button' active={calendarOpen} onClick={() => setCalendarOpen(true)}>
                            {date.toLocaleDateString()}
                        </Styled.CalendarButton>
                        <Popup 
                            nested 
                            position="top" 
                            role="dialog" 
                            open={calendarOpen} 
                            onClose={() => setCalendarOpen(false)}
                            >
                            <Styled.CalendarContainer>
                                <Calendar onClickDay={(value) => { setDate(value); setCalendarOpen(false) }} value={date}/>
                            </Styled.CalendarContainer>
                        </Popup> 
                    </>
                }
                {priority &&
                    <>
                        <Styled.Label htmlFor=''>
                            Prioridade
                            <OptionsButton options={[{ handler: () => setPriority(false), label: 'Remover campo' }]}/>
                        </Styled.Label>
                        <Styled.Select id='priority' ref={priorityRef}>
                            <Styled.Option value='Baixa'>Baixa</Styled.Option>    
                            <Styled.Option value='Media'>Média</Styled.Option>
                            <Styled.Option value='Alta'>Alta</Styled.Option>
                        </Styled.Select>
                    </>
                }
                <Styled.AddFieldDiv>
                    <Styled.AddButton type='button' hidden={description} onClick={() => setDescription(true)}>+ adicionar descrição</Styled.AddButton>
                    <Styled.AddButton type='button' hidden={deadline} onClick={() => setDeadline(true)}>+ adicionar prazo</Styled.AddButton>
                    <Styled.AddButton type='button' hidden={priority} onClick={() => setPriority(true)}>+ adicionar prioridade</Styled.AddButton>
                </Styled.AddFieldDiv>
                <Styled.SubmitButton onClick={(e) => handleSubmit(e)}>Finalizar</Styled.SubmitButton>
            </Styled.Form>
        </Styled.Content>
    )
}