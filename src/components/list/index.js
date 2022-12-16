import React, { useContext, useState } from 'react';

import Card from "../card";
import * as C from './styles';
import { SectionContext } from '../../contexts/SectionContext';

const List = ({ section, data, listIndex }) => {    
    const { dragging, drop, setCardEditing } = useContext(SectionContext)

    return (
        <C.Content 
            draggable={dragging.toString()}
            onDragOver={e => e.preventDefault()}
            onDrop={e => drop(e, listIndex)}>
            <C.SectionHeader>
                {section}
                <C.PopupButton onClick={() => setCardEditing({operation: 'Nova tarefa', listIndex})}>+</C.PopupButton>
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
        </C.Content>
    )
}

export default List;