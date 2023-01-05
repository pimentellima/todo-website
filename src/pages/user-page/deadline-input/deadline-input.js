import React from 'react';
import Calendar from 'react-calendar';
import * as S from './styles'

const DeadlineInput = ({ value, onChange }) => {
    return (
        <S.DatepickerPopup 
                nested 
                position="top" 
                arrow={false}
                trigger={
                    <S.OpenDatepickerButton 
                        type='button'
                        selected={!!value}>
                        {
                            value ? 
                                value : 
                                'Sem prazo'
                        }
                    </S.OpenDatepickerButton>}
                >
                <Calendar 
                    minDate={new Date()}
                    defaultValue={new Date()} 
                    onChange={e => { 
                        e.target={
                            name: 'deadline', 
                            value: e.toLocaleDateString()
                        };
                        onChange(e);
                        }}
                    />
                <S.RemoveDeadlineButton
                    onClick={e => { 
                        e.target={
                            name: 'deadline', 
                            value: ''
                        };
                        onChange(e);
                        }}>
                        Deixar prazo em branco
                </S.RemoveDeadlineButton>
            </S.DatepickerPopup> 
    )
};

export default DeadlineInput;