import React from 'react';

import * as S from './styles';

import Popup from "reactjs-popup";

const TodoFormModal = ({ children, open, closeModal }) => {

    return (
        <Popup 
            nested
            arrow={false}
            open={open}
            closeOnDocumentClick={false}
            >
            <S.HideScreen onClick={closeModal}/>
            <S.Content>
                {children}
            </S.Content>
        </Popup>
    )
}

export default TodoFormModal;