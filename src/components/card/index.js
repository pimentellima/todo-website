import React, { useContext } from 'react';

import * as C from './styles'
import { SectionContext } from '../../contexts/SectionContext';
import { GrTextAlignLeft, GrCalendar } from "react-icons/gr";

const Card = ( { card, index, listIndex } ) => {
    const { dragStart, dragEnter, dragging, dragItem } = useContext(SectionContext)

    return (
            <C.Container 
                isBeingDragged={ dragging && listIndex == dragItem.listIndex && index == dragItem.index }
                draggable
                onDragStart={e => dragStart(e, { card, index, listIndex })}
                onDragEnter={e => {dragEnter(e, { card, index, listIndex }); e.stopPropagation()}}
                onDragOver={e => e.preventDefault()}
                onDrop={e => e.preventDefault()}>
                <C.Header>
                    {card.priority ? <C.PriorityLabel priority={card.priority}>{card.priority}</C.PriorityLabel> : <></>}
                </C.Header>
                <C.Content>
                    <C.Title>{card.title}</C.Title>
                    {card.description ? 
                        <C.PropertyContent>
                            <C.PropertyHeader> 
                                <GrTextAlignLeft/> 
                                <C.PropertyLabel>{'DESCRIÇÃO'}</C.PropertyLabel>
                            </C.PropertyHeader>
                            <C.PropertySpan>{card.description}</C.PropertySpan>
                        </C.PropertyContent> 
                        : 
                        <></>}
                        {card.deadline ? 
                        <C.PropertyContent>
                            <C.PropertyHeader> 
                                <GrCalendar/> 
                                <C.PropertyLabel>{'PRAZO'}</C.PropertyLabel>
                            </C.PropertyHeader>
                            <C.PropertySpan>{card.deadline}</C.PropertySpan>
                        </C.PropertyContent> 
                        : 
                        <></>}
                </C.Content>
            </C.Container>
    )
}

export default Card;