import React from "react";
import { useState } from "react";
import { HiDotsVertical } from 'react-icons/hi';
import Popup from "reactjs-popup";
import styled from "styled-components";

const PopupMenu = ({ position, options }) => {
    const [open, setOpen] = useState(false);

    const handleClick = (option) => {
        option.handler();
        setOpen(false);
    };

    return (
        <MenuPopup 
            nested 
            open={open}
            onOpen={() => setOpen(true)}
            arrow={false}
            position={position}
            trigger=
                <OpenPopupButton active={open} type='button'>
                    <HiDotsVertical/>
                </OpenPopupButton>
            >
            {options.map((option, index) => 
                <OptionButton 
                    onClick={() => handleClick(option)} 
                    key={index}
                    >
                    {option.label}
                </OptionButton>)
            }
        </MenuPopup>
    )
};

const MenuPopup = styled(Popup)`
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

const OpenPopupButton = styled.button`
    color:${({theme}) => theme.colors.grey.dark};
    border: none;
    background: inherit;

    :hover {
        cursor: pointer;
        color: ${({theme}) => theme.colors.blue.default};
    }
`

const OptionButton = styled.button`
    font-size: ${({theme}) => theme.fontSizes.smallMedium};
    border-radius: ${({theme}) => theme.borderRadius.small};
    color: ${({theme}) => theme.colors.fontColors.primary};
    background-color: ${({theme}) => theme.colors.white};
    padding: 7px 20px;
    border: none;
    width: 150px;
    transition: ${({theme}) => theme.transitions.buttonHover};

    :hover {
        background-color: ${({theme}) => theme.colors.blue.default};;
        color: ${({theme}) => theme.colors.white};
        cursor: pointer;
    }
`

export default PopupMenu;