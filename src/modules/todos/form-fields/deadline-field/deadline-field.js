import React from "react";
import * as S from './styles';
import Calendar from "react-calendar";
import PopupMenu from '../../components/popup-menu/popup-menu'

const DeadlineField = (props) => {
    const { value, hidden, onChange, onHide } = props;

    return ( 
        <div hidden={hidden}>
            <S.Label htmlFor=''>
                Prazo
                <PopupMenu 
                    position='bottom right'
                    options={[
                        {
                            label: 'Remover campo', 
                            handler: () => onHide('deadline')
                        }]}
                    />
            </S.Label>
            <S.CalendarPopup 
                nested 
                position="top" 
                arrow={false}
                trigger={
                    <S.CalendarButton type='button'>
                        {value ? value : 'Selecione uma data'}
                    </S.CalendarButton>
                }
                >
                <Calendar 
                    defaultValue={new Date()} 
                    onClickDay={date => onChange
                        ('deadline', date.toLocaleDateString())}
                    />
            </S.CalendarPopup> 
        </div>
    )
}

export default DeadlineField;