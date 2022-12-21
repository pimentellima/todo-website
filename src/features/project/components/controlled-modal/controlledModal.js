import React, { useState} from 'react';

import styled from "styled-components"

import Popup from "reactjs-popup";

const HideScreen  = styled.div`
    position: fixed;
    top:0; 
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(119,126,131, 0.5);
    z-index: -999;
`

const Content = styled.div`
    display: flex;
    z-index: 9999;
    background-color: red;
`

const ControlledModal = ({ children, open, handleCloseModal }) => {

    return(
        <Popup 
            nested
            arrow={false}
            open={open}
            closeOnDocumentClick={false}
            >
            <HideScreen onClick={handleCloseModal}/>
            <Content>
                {children}
            </Content>
        </Popup>
    )
}

export default ControlledModal;