import React, { useState } from 'react';

import * as C from './styles'
import { GrTextAlignLeft, GrCalendar } from "react-icons/gr";
import Popup from 'reactjs-popup';
import CardView from '../cardView';
import { useDrag } from '../../hooks/useDrag';

const Card = ( { card, index, listIndex } ) => {
    const [viewing, setViewing] = useState(false)

    const { dragItem, dragStart, dragEnter, dragging } = useDrag()

    return (
        <>
            <Popup
                open={viewing}
                onClose={() => setViewing(false)}
                role='dialog'
                closeOnDocumentClick={false}
                >
                <C.HideScreen onClick={() => setViewing(false)}/>
                <CardView card={card} index={index} listIndex={listIndex}/>
            </Popup>    
            <C.Container isBeingDragged={ dragging && dragItem.current.index === index && dragItem.current.listIndex === listIndex }>
                <C.CardItem 
                    onClick={() => setViewing(true)}
                    draggable
                    isBeingDragged={ dragging && dragItem.current.index === index && dragItem.current.listIndex === listIndex }
                    onDragStart={e => dragStart(e, { index, listIndex })}
                    onDragEnter={e => {dragEnter(e, { index, listIndex }); e.stopPropagation()}}
                    onDragOver={e => e.preventDefault()}
                    onDrop={e => e.preventDefault()}
                    >
                    <C.Header>
                        {card.priority && <C.PriorityLabel priority={card.priority}>{card.priority}</C.PriorityLabel>}
                    </C.Header>
                    <C.Content>
                        <C.Title>{card.title}</C.Title>
                        {card.description &&
                            <C.PropertyContent>
                                <C.PropertyHeader> 
                                    <GrTextAlignLeft/> 
                                    <C.PropertyLabel>{'DESCRIÇÃO'}</C.PropertyLabel>
                                </C.PropertyHeader>
                                <C.PropertySpan>{card.description}</C.PropertySpan>
                            </C.PropertyContent> 
                            }
                        {card.deadline &&
                            <C.PropertyContent>
                                <C.PropertyHeader> 
                                    <GrCalendar/> 
                                    <C.PropertyLabel>{'PRAZO'}</C.PropertyLabel>
                                </C.PropertyHeader>
                                <C.PropertySpan>{card.deadline}</C.PropertySpan>
                            </C.PropertyContent> 
                        }
                    </C.Content>
                </C.CardItem>
            </C.Container>
        </>
    )
}

export default Card;