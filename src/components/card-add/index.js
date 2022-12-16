import React, { useContext, useRef, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { SectionContext } from '../../contexts/SectionContext';
import * as C from './styles'
import Calendar from 'react-calendar';
import Popup from 'reactjs-popup';

export const CardMenu = () => {
    const { addCard, editCard, cardEditing, setCardEditing } = useContext(SectionContext)

    const [error, setError] = useState('')
    const [calendarOpen, setCalendarOpen] = useState(false)
    const [priorityChanged, setPriorityChanged] = useState(false)
    const [date, setDate] = useState(new Date());

    const titleRef = useRef()
    const descriptionRef = useRef()
    const priorityRef = useRef()

    const handleAdd = (e) => {
        e.preventDefault()
        const title = titleRef.current.value

        if(title === '') {
            setError('Não pode ser vazio')  ;
            return;
        } 

        const deadline = date.toLocaleDateString();
        const description = descriptionRef.current.value
        const priority = priorityRef.current.value
        const card = {title: title, description: description, deadline: deadline, priority: priority, id: uuidv4()}
        titleRef.current = null
        descriptionRef.current = null
        priorityRef.current = null

        if(cardEditing.operation === 'Editar tarefa') {
            editCard(card, cardEditing.index, cardEditing.listIndex);
        }
        if(cardEditing.operation === 'Nova tarefa') {
            addCard(card, cardEditing.listIndex)
        }
        setCardEditing(null)
    }

    return (
        <C.Form onSubmit={e => handleAdd(e)}>
            {cardEditing ? <C.TitleLabel>{cardEditing.operation}</C.TitleLabel> : <></>}
            <C.Input ref={titleRef} onChange={() => setError('')} isInvalid={!!error} placeholder='titulo' type='text'/>
            {error ? <C.Error>{error}</C.Error> : <></>}
            <C.Input ref={descriptionRef} placeholder='descrição' isInvalid={false} type='text'/>
            <C.PrioritySelect priorityChanged={ priorityChanged } onChange={() => setPriorityChanged(true)} ref={priorityRef}>
                <C.PriorityOption value='' default hidden>prioridade</C.PriorityOption>
                <C.PriorityOption value='Alta'>Alta</C.PriorityOption>
                <C.PriorityOption value='Media'>Média</C.PriorityOption>
                <C.PriorityOption value='Baixa'>Baixa</C.PriorityOption>    
            </C.PrioritySelect>
            <C.CalendarLabel onClick={() => setCalendarOpen(true)}>{date.toLocaleDateString()}</C.CalendarLabel>
            <Popup nested position="top" role="dialog" open={calendarOpen} onClose={() => setCalendarOpen(false)}>
                <C.CalendarContainer>
                    <Calendar onClickDay={(value) => setDate(value)} value={date}/>
                </C.CalendarContainer>
            </Popup>
            <C.SubmitButton onClick={e => handleAdd(e)}>Finalizar</C.SubmitButton>
        </C.Form>
    )
}