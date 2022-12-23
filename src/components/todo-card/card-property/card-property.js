import React from "react";

import * as S from './styles'

import { GrTextAlignLeft, GrCalendar } from "react-icons/gr";

const CardProperty = ({ children, icon, text }) => {
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
            <S.Span>
                {children}
            </S.Span>
        </S.Content> 
    )
}

export default CardProperty;