import React, { useContext, useRef, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { SectionContext } from '../../contexts/SectionContext';
import * as C from './styles'
import Calendar from 'react-calendar';
import Popup from 'reactjs-popup';
import { IoTrashBinOutline } from "react-icons/io5";
import { HiDotsVertical } from 'react-icons/hi'

export const CardMenu = ({ listIndex, setCreating }) => {
    const { addCard } = useContext(SectionContext)

    const [error, setError] = useState('')
    const [date, setDate] = useState(new Date())
    const [calendarOpen, setCalendarOpen] = useState(false)
    const [priority, setPriority] = useState(false)
    const [description, setDescription] = useState(false)
    const [deadline, setDeadline] = useState(false);

    const titleRef = useRef()
    const descriptionRef = useRef()
    const priorityRef = useRef()    

    const handleSubmit = (e) => {
        e.preventDefault()
        const card = new Object()
        card.title = titleRef.current.value
        if(card.title === '') {
            setError('Não pode ser vazio');
            return;
        } 
        card.description = description ? descriptionRef.current.value : ''
        card.priority = priority ? priorityRef.current.value : ''
        card.deadline = deadline ? date.toLocaleDateString() : ''
        card.id = uuidv4()
        addCard({card, listIndex})
        setCreating(false)
    }

    return (
        <C.Content>
            <C.Title>Nova tarefa</C.Title>
            <C.Form onSubmit={e => handleSubmit(e)}>
                <C.InputDiv>
                    <C.InputLabel>*Título da tarefa</C.InputLabel>
                    <C.Input 
                        className='title'
                        autoFocus
                        ref={titleRef}
                        onChange={() => setError('')}
                        onKeyDown={e => e.key === 'Enter' && handleSubmit(e)}
                        placeholder= "Digite aqui ..."
                        isInvalid={!!error} 
                        type='text'
                        />
                </C.InputDiv>
                <C.Error>{error}</C.Error>
                    {description &&    
                        <C.InputDiv>
                            <C.InputLabel>
                                Descrição 
                                <Popup
                                    arrow={false}
                                    trigger={open => <C.OptionsButton type='button' active={open}> <HiDotsVertical/> </C.OptionsButton>}
                                    position='bottom right'
                                    >
                                    <C.OptionsContainer>
                                        <C.RemoveFieldButton type='button' onClick={() => setDescription(false)}>
                                            Remover campo
                                        </C.RemoveFieldButton>
                                    </C.OptionsContainer>
                                </Popup>
                            </C.InputLabel>
                            <C.Input 
                                autoFocus
                                ref={descriptionRef}
                                onKeyDown={e => e.key === 'Enter' && handleSubmit(e)}
                                placeholder= "Digite aqui ..."
                                type='text'
                                /> 
                        </C.InputDiv>
                    }
                {deadline &&
                    <C.InputDiv>
                        <C.InputLabel>Prazo</C.InputLabel>
                        <C.CalendarButton type='button' active={calendarOpen} onClick={() => setCalendarOpen(true)}>
                            {date.toLocaleDateString()}
                        </C.CalendarButton>
                        <Popup 
                            nested 
                            position="top" 
                            role="dialog" 
                            open={calendarOpen} 
                            onClose={() => setCalendarOpen(false)}
                            >
                            <C.CalendarContainer>
                                <Calendar onClickDay={(value) => { setDate(value); setCalendarOpen(false) }} value={date}/>
                            </C.CalendarContainer>
                        </Popup>
                    </C.InputDiv>
                }
                    {priority &&
                        <C.InputDiv>
                            <C.InputLabel>Prioridade</C.InputLabel>
                            <C.PrioritySelect ref={priorityRef}>
                                <C.PriorityOption value='Baixa'>Baixa</C.PriorityOption>    
                                <C.PriorityOption value='Media'>Média</C.PriorityOption>
                                <C.PriorityOption value='Alta'>Alta</C.PriorityOption>
                            </C.PrioritySelect>
                        </C.InputDiv>
                }
            </C.Form>
                <C.FieldOptions>
                    <C.AddFieldButton hidden={description} onClick={() => setDescription(true)}>
                        + adicionar descrição
                    </C.AddFieldButton>
                    <C.AddFieldButton hidden={deadline} onClick={() => setDeadline(true)}>
                        + adicionar prazo
                    </C.AddFieldButton>
                    <C.AddFieldButton hidden={priority} onClick={() => setPriority(true)}>
                        + adicionar prioridade
                    </C.AddFieldButton>
                </C.FieldOptions>
                <C.SubmitButton onClick={(e) => handleSubmit(e)}>
                    Finalizar
                </C.SubmitButton>
            </C.Content>
        )
}