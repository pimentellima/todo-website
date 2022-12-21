import React from "react";

import * as S from './fieldStyles'

import { HiDotsVertical } from 'react-icons/hi';

import Popup from "reactjs-popup";

const Field = ({ label, onRemove, children, hidden }) => {

    return (
        <div hidden={hidden}>
            <S.Label htmlFor=''>
                {label} 
                <Popup 
                    arrow={false} 
                    trigger={open => <S.TriggerButton type='button' active={open}><HiDotsVertical/></S.TriggerButton>} 
                    position='bottom right'
                    >
                    <S.Modal>
                        <S.RemoveButton onClick={onRemove}>Remover campo</S.RemoveButton>
                    </S.Modal>
                </Popup>
            </S.Label>
            {children}
        </div>
    )
}

export default Field;