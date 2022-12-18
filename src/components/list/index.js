import React, { Fragment, useContext, useState, useEffect } from 'react';

import Card from "../card";
import * as C from './styles';
import { SectionContext } from '../../contexts/SectionContext';
import { CardMenu } from '../card-add';
import Popup from 'reactjs-popup';

const List = ({ section, data, listIndex }) => {    
    const { dragging, drop } = useContext(SectionContext)

    const[creating, setCreating] = useState(false)


    return (
        <C.Content 
            draggable={dragging.toString()}
            onDragOver={e => e.preventDefault()}
            onDrop={e => drop(e, listIndex)}>
            <C.SectionHeader>
                {section}
                <C.PopupButton onClick={() => setCreating(true)}>+</C.PopupButton>
            </C.SectionHeader>
            <ul>
            <Popup 
                nested
                open={creating} 
                closeOnDocumentClick={false}
                >
                <C.HideScreen onClick={() => setCreating(false)}/>
                <CardMenu setCreating={setCreating} listIndex={listIndex}/>
            </Popup>
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