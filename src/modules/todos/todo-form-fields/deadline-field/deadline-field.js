import React from "react";
import * as S from './styles';
import Calendar from "react-calendar";
import { generateHideMenu } from "../generate-hide-menu";

const DeadlineField = (props) => {
    const { value, hidden, onChange, onHide } = props;

    const renderCalendarButton = () => {
        return (
            <S.CalendarButton type='button'>
                {value ? value : 'Selecione o prazo'}
            </S.CalendarButton>
        )
    };

    return ( 
        <div hidden={hidden}>
            <S.Label htmlFor=''>
                Prazo
                {generateHideMenu('deadline', onHide)}
            </S.Label>
            <S.CalendarPopup 
                nested 
                position="top" 
                arrow={false}
                trigger={renderCalendarButton()}
                >
                <Calendar 
                    defaultValue={new Date()} 
                    onClickDay={date => onChange('deadline', date.toLocaleDateString())}
                    />
            </S.CalendarPopup> 
        </div>
    )
}

export default DeadlineField;