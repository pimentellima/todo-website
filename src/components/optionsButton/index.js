import React from "react";
import { HiDotsVertical } from 'react-icons/hi'

import * as C from './styles'

import Popup from "reactjs-popup";

const OptionsButton = ( {options} ) => {

    return (
        <Popup arrow={false} trigger={open => <C.Button type='button' active={open}><HiDotsVertical/></C.Button>} position='bottom right'>
            <C.OptionsContainer>
            <ul>
                {options.map((option, index) => <C.OptionButton key={index} onClick={option.handler}>{option.label}</C.OptionButton>)}
            </ul>
            </C.OptionsContainer>
        </Popup>
    )
}

export default OptionsButton;