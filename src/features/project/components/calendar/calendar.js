import React from "react";
import { Calendar as ReactCalendar } from "react-calendar";

import * as S from './styles'

import Popup from "reactjs-popup";

const Calendar = ({ open, setOpen, date, setDate }) => {

    const handleClickDay = (value) => {
        setDate(value);
        setOpen(false)
    }   

    return (
        <div>
            <S.Button type='button' onClick={() => setOpen(true)}>
                {date.toLocaleDateString()}
            </S.Button>
            <Popup 
                nested 
                position="top" 
                role="dialog" 
                open={open} 
                onClose={() => setOpen(false)}
                >
                <S.Container>
                    <ReactCalendar onClickDay={(value) => handleClickDay(value)} value={date}/>
                </S.Container>
            </Popup> 
        </div>
    )
}

export default Calendar;