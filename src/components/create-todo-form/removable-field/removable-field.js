import React from "react";

import * as S from './styles'

import { HiDotsVertical } from 'react-icons/hi';

import Popup from "reactjs-popup";

const RemovableField = ({ labelText, onRemoveField, children }) => {
    
    return (
        <S.Container>
            <S.Label htmlFor="">
                {labelText} 
                <Popup 
                    nested 
                    trigger={(open) => <S.MenuButton active={open} type='button'><HiDotsVertical/></S.MenuButton>}
                    arrow={false}
                    position='bottom right'>
                    <S.MenuContent>
                        <S.RemoveButton onClick={onRemoveField}>Remover campo</S.RemoveButton>
                    </S.MenuContent>
                </Popup>
            </S.Label>
            {children}
        </S.Container>
    )
}

export default RemovableField;