import React, { useState } from "react";
import * as S from './styles'
import { HiDotsVertical } from 'react-icons/hi';''

const PopupMenu = ({ position, options }) => {
    const [open, setOpen] = useState(false);

    const handleClick = (option) => {
        option.handler();
        setOpen(false);
    };

    return (
        <S.MenuPopup 
            nested 
            open={open}
            onOpen={() => setOpen(true)}
            arrow={false}
            position={position}
            trigger=
                <S.OpenPopupButton active={open} type='button'>
                    <HiDotsVertical/>
                </S.OpenPopupButton>
            >
            {options.map((option, index) => 
                <S.OptionButton 
                    onClick={() => handleClick(option)} 
                    key={index}
                    >
                    {option.label}
                </S.OptionButton>)
            }
        </S.MenuPopup>
    )
};

export default PopupMenu;