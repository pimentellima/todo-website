import React, { useContext, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { SectionContext } from '../../contexts/SectionContext';
import * as C from './styles'
import Calendar from 'react-calendar';
import Popup from 'reactjs-popup';

export const AddCard = ({ listIndex, setCardOpen }) => {
    const { addCard } = useContext(SectionContext)

    const [error, setError] = useState('')
    const [calendarOpen, setCalendarOpen] = useState(false)
    const [selectChanged, setSelectChanged] = useState(false)
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
        addCard({title: title, description: description, deadline: deadline, priority: priority, id: uuidv4()}, listIndex)
        setSelectChanged(false)
        setDate(new Date())
        setCardOpen(false)
    }

    return (
        <C.Content>
            <C.TitleLabel>Nova tarefa</C.TitleLabel>
            <C.Form onSubmit={e => handleAdd(e)}>
                <C.Input ref={titleRef} onChange={() => setError('')} isInvalid={!!error} placeholder='titulo' type='text'/>
                {error ? <C.Error>{error}</C.Error> : <></>}
                <C.Input ref={descriptionRef} placeholder='descrição' isInvalid={false} type='text'/>
                <C.PrioritySelect selectChanged={ selectChanged } onChange={() => setSelectChanged(true)} ref={priorityRef}>
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
                <C.SubmitButton onClick={handleAdd}>Adicionar tarefa</C.SubmitButton>
            </C.Form>
        </C.Content>
    )
}