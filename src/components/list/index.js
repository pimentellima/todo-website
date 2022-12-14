import React, { useContext, useState } from 'react';

import Card from "../card";
import { AddCard } from '../add-card';
import * as C from './styles';
import { SectionContext } from '../../contexts/SectionContext';
import Popup from 'reactjs-popup';

const List = ({ section, data, listIndex }) => {    
    const { dragging, drop } = useContext(SectionContext)
    const [ cardOpen, setCardOpen ] = useState(false)

    return (
            <C.Container 
                section={section}
                draggable={dragging.toString()}
                onDragOver={e => e.preventDefault()}
                onDrop={e => drop(e, listIndex)}>
                <C.SectionHeader>
                    {section}
                    <C.PopupButton onClick={() => setCardOpen(true)}>+</C.PopupButton>
                    {cardOpen ? 
                        <C.HideScreen>
                            <Popup 
                                nested
                                open={cardOpen} 
                                role="dialog" 
                                onClose={() => setCardOpen(false)}>
                                <AddCard listIndex={listIndex} setCardOpen={setCardOpen}/>
                            </Popup>
                        </C.HideScreen>
                        : <></>}
                </C.SectionHeader>
                <ul>
                {data.map((card, index) => 
                    <Card 
                        card={card} 
                        index={index}
                        listIndex={listIndex}
                        section={section}
                        key={card.id}
                        />)}
                </ul>
            </C.Container>
        )
}

export default List;