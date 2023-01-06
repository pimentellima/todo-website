import React from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import LightButton from '../../../components/light-button';
import CalendarPopup from './calendar-popup';

const DeadlineInput = (props) => {
    const {
        open,
        setOpen,
        value,
        onChange
    } = props;
    
    return (
        <CalendarPopup
                nested 
                position="top" 
                arrow={false}
                open={open}
                onOpen={() => setOpen(true)}
                trigger={
                    <PopupButton 
                        type='button'
                        selected={!!value}>
                        {
                            value ? 
                                value : 
                                'Sem prazo'
                        }
                    </PopupButton>}
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
            </CalendarPopup> 
    )
};

const PopupButton = styled.button`
    background-color: ${({theme}) => theme.colors.background};
    border: 1px solid ${({theme}) => theme.colors.background};
    border-radius: ${({theme}) => theme.borderRadius.medium};
    font-size: ${({theme}) => theme.fontSizes.medium};
    transition: ${({theme}) => theme.transitions.buttonHover};
    display: flex;
    align-items: center;
    height: 50px;
    text-indent: 10px;
    width: 100%;
    color: ${({theme, selected}) => 
        selected ? 
        theme.colors.fontColors.primary :
        theme.colors.fontColors.placeholder
    };
    
    :hover, :active {
        background-color: ${({theme}) => theme.colors.white};
        border-color: ${({theme}) => theme.colors.blue.light};
        cursor: pointer;
    }
`


export default DeadlineInput;