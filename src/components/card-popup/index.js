import React, { useContext, useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { SectionContext } from '../../contexts/SectionContext';
import * as C from './styles'
import Calendar from 'react-calendar';
import Popup from 'reactjs-popup';

export const CardPopup = ({ listIndex, open, setCardOpen }) => {
    const { addCard } = useContext(SectionContext)

    const [error, setError] = useState('')
    const [calendarOpen, setCalendarOpen] = useState(false)
    const [selectChanged, setSelectChanged] = useState(false)
    const [date, setDate] = useState(new Date());
    const [hasDeadline, setDeadline] = useState(false);

    useEffect(() => {
    })


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
        const description = descriptionRef.current.value
        const priority = priorityRef.current.value
        let deadline = date.toLocaleDateString();
        if(!hasDeadline) {
            deadline = ''
        }
        addCard({title: title, description: description, deadline: deadline, priority: priority, id: uuidv4()}, listIndex)
        setDeadline(false)
        setCardOpen(false)
    }

    return (
        <C.CardPopup nested open={open} position="center center" role="dialog" onClose={() => setCardOpen(false)}>
            <C.Form onSubmit={e => handleAdd(e)}>
                <C.TitleLabel>Nova tarefa</C.TitleLabel>
                <C.Input ref={titleRef} onChange={() => setError('')} isInvalid={!!error} placeholder='titulo' type='text'/>
                <C.Error>{error}</C.Error>
                <C.Input ref={descriptionRef} placeholder='descrição' isInvalid={false} type='text'/>
                <C.Select selectChanged={ selectChanged } onChange={() => setSelectChanged(true)} ref={priorityRef}>
                    <C.Option value='' default hidden>prioridade</C.Option>
                    <C.Option value='Alta'>Alta</C.Option>
                    <C.Option value='Media'>Média</C.Option>
                    <C.Option value='Baixa'>Baixa</C.Option>    
                </C.Select>
                <C.CalendarLabel onClick={() => setCalendarOpen(true)}>{hasDeadline ? date.toLocaleDateString() : 'prazo'}</C.CalendarLabel>
                <C.CalendarPopup nested position="top" role="dialog" open={calendarOpen} onClose={() => setCalendarOpen(false)}>
                    <C.CalendarContainer>
                        <Calendar onClickDay={(value) => {setDate(value); setDeadline(true)}} value={date}/>
                    </C.CalendarContainer>
                </C.CalendarPopup>
                <C.SubmitButton onClick={handleAdd}>Adicionar tarefa</C.SubmitButton>
            </C.Form>
        </C.CardPopup>
    )
}