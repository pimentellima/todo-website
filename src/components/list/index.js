import React, { useContext, useState } from 'react';

import Card from "../card";
import * as C from './styles';
import { SectionContext } from '../../contexts/SectionContext';
import { CardPopup } from '../card-popup';

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
                    <CardPopup
                        setCardOpen={setCardOpen} 
                        open={cardOpen}
                        listIndex={listIndex}
                        />
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