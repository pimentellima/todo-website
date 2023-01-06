import React from 'react';
import { useState } from "react";
import { HiDotsVertical } from 'react-icons/hi';
import Popup from "reactjs-popup";
import styled from "styled-components";
import LightButton from '../../components/light-button';

const PopupMenu = ({ position, options }) => {
    const [open, setOpen] = useState(false);

    const handleClick = (option) => {
        option.handler();
        setOpen(false);
    };

    return (
        <StyledPopup 
            nested 
            open={open}
            onOpen={() => setOpen(true)}
            arrow={false}
            position={position}
            trigger=
                <PopupButton active={open} type='button'>
                    <HiDotsVertical/>
                </PopupButton>
            >
            {options.map((option, index) => 
                <LightButton 
                    onClick={() => handleClick(option)} 
                    key={index}
                    >
                    {option.label}
                </LightButton>)
            }
        </StyledPopup>
    )
};

const StyledPopup = styled(Popup)`
    &-content {
        border: 1px solid ${({theme}) => theme.colors.border.default};
        background-color: ${({theme}) => theme.colors.white};
        display: flex;
        flex-direction: column;
        padding: 3px 7px;
        border-radius: 3px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        margin-top: 10px;
    }
`

const PopupButton = styled.button`
    color:${({theme}) => theme.colors.grey.dark};
    border: none;
    background: inherit;

    :hover {
        cursor: pointer;
        color: ${({theme}) => theme.colors.blue.default};
    }
`

export default PopupMenu;