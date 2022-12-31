import React, { useState } from "react";

import * as S from './styles'

import { HiDotsVertical } from 'react-icons/hi';''

import Popup from "reactjs-popup";

const PopupMenu = ({ position, options }) => {
    const [open, setOpen] = useState(false)

    const handleClick = (option) => {
        option.handler();
        setOpen(false);
    }

    return (
        <Popup 
            nested 
            open={open}
            onOpen={() => setOpen(true)}
            arrow={false}
            position={position}
            trigger=
                <S.PopupButton active={open} type='button'>
                    <HiDotsVertical/>
                </S.PopupButton>
            >
            <S.Content>
                {options.map((option, index) => 
                    <S.OptionButton 
                        onClick={() => handleClick(option)} 
                        key={index}>
                            {option.label}
                    </S.OptionButton>)
                }
            </S.Content>
        </Popup>
    )
}

export default PopupMenu;