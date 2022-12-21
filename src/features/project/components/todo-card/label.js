import React from "react";

import * as S from './labelStyles'

import { GrTextAlignLeft, GrCalendar } from "react-icons/gr";

const Label = ({ children, icon, text }) => {

    const renderIcon = () => {
        if(icon === 'description') return <GrTextAlignLeft/>
        if(icon === 'deadline') return <GrCalendar/>
    }

    return(
        <S.Content>
            <S.Header> 
                {renderIcon()}
                <S.Label>
                    {text}
                </S.Label>
            </S.Header>
            {children}
        </S.Content> 
    )
}

export default Label;