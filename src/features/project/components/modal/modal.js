import React from 'react';

import * as S from './styles'

import Popup from "reactjs-popup";

const Modal = ({ children, open, handleCloseModal }) => {

    return(
        <Popup 
            nested
            arrow={false}
            open={open}
            closeOnDocumentClick={false}
            >
            <S.HideScreen onClick={handleCloseModal}/>
            <S.Content>
                {children}
            </S.Content>
        </Popup>
    )
}

export default Modal;