import React from "react";
import PopupMenu from '../../ui/popup-menu/popup-menu'
import * as S from './styles'
import Calendar from "react-calendar";

const DeadlineField = (props) => {
    const { value, hidden, handleChange, handleHide } = props;

    const renderCalendarButton = () => {
        return (
            <S.CalendarButton type='button'>
                {value ? value : 'Selecione o prazo'}
            </S.CalendarButton>
        )
    }

    return ( 
        <div hidden={hidden}>
            <S.Label htmlFor=''>
                Prazo
                <PopupMenu 
                    position='bottom right'
                    options={[
                        {
                            label: 'Remover campo', 
                            handler: () => handleHide('deadline', true)
                        }]}
                    />
            </S.Label>
            <S.CalendarPopup 
                nested 
                position="top" 
                arrow={false}
                trigger={renderCalendarButton()}
                >
                <Calendar 
                    defaultValue={new Date()} 
                    onClickDay={date => 
                        handleChange(date.toLocaleDateString(), 'deadline')}
                    />
            </S.CalendarPopup> 
        </div>
    )
}

export default DeadlineField;