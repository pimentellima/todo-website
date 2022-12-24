import React from "react";
import Calendar from "react-calendar";

import * as S from './styles';

import Popup from "reactjs-popup";

const CalendarField = ({ date, setDate }) => {

    return (
        <div>
            <Popup 
                nested 
                position="top" 
                role="dialog" 
                trigger={<S.Button type='button'>{date.toLocaleDateString()}</S.Button>}
                >
                <S.Content>
                    <Calendar onClickDay={(value) => setDate(value)} value={date}/>
                </S.Content>
            </Popup> 
        </div>
    )
}

export default CalendarField;