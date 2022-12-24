import React, { useState } from "react";

import * as S from './styles'

import { HiDotsVertical } from 'react-icons/hi';''

import Popup from "reactjs-popup";

const PopupMenu = ({ options }) => {
    const [open, setOpen] = useState(false)

    const onOptionClick = (option) => {
        option.handler();
        setOpen(false);
    }

    return (
        <Popup 
            nested 
            trigger={<S.PopupButton active={open} type='button'><HiDotsVertical/></S.PopupButton>}
            open={open}
            onOpen={() => setOpen(true)}
            arrow={false}
            position='bottom right'>
            <S.MenuContent>
                {options.map((option, index) => 
                    <S.OptionButton onClick={() => onOptionClick(option)} key={index}>{option.label}</S.OptionButton>)
                }
            </S.MenuContent>
        </Popup>
    )
}

export default PopupMenu;