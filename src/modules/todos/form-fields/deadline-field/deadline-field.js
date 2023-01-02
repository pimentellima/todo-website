import React from "react";
import * as S from './styles';
import Calendar from "react-calendar";
import PopupMenu from '../../components/popup-menu/popup-menu'

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
                <PopupMenu 
                    position='bottom right'
                    options={[
                        {
                            label: 'Remover campo', 
                            handler: () => onHide(label, true)
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
                    onClickDay={date => onChange('deadline', date.toLocaleDateString())}
                    />
            </S.CalendarPopup> 
        </div>
    )
}

export default DeadlineField;