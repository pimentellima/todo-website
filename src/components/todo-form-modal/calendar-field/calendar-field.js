import React, { useState } from "react";
import Calendar from "react-calendar";

import * as S from './styles';

import Popup from "reactjs-popup";

const DeadlineField = ({ handleInputChange }) => {
    const date = new Date()

    return (
        <div name='deadline' onClick={e => console.log(e.currentTarget.name)}>
            <Popup 
                nested 
                position="top" 
                role="dialog" 
                trigger={<S.Button type='button'>{date.toLocaleDateString()}</S.Button>}
                >
                <S.Content>
                    <Calendar 
                        name='deadline'
                        onChange={e => {}}
                        defaultValue={date}
                        />
                </S.Content>
            </Popup> 
        </div>
    )
}

export default DeadlineField;