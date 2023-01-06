import React, { useState } from 'react';
import Calendar from 'react-calendar';
import LightButton from '../../../../components/light-button';
import * as S from './styles'

const DeadlineInput = ({ value, onChange }) => {
    const [open, setOpen] = useState(false);
    
    return (
        <S.StyledPopup 
                nested 
                position="top" 
                arrow={false}
                open={open}
                onOpen={() => setOpen(true)}
                trigger={
                    <S.PopupButton 
                        type='button'
                        selected={!!value}>
                        {
                            value ? 
                                value : 
                                'Sem prazo'
                        }
                    </S.PopupButton>}
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
                        setOpen(false);
                        }}
                    />
                <LightButton
                    onClick={e => { 
                        e.target={
                            name: 'deadline', 
                            value: ''
                        };
                        onChange(e);
                        setOpen(false);
                        }}>
                        Deixar prazo em branco
                </LightButton>
            </S.StyledPopup> 
    )
};

export default DeadlineInput;