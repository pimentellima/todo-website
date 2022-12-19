import React, {  useState, useContext } from 'react';
import Card from "../card";
import * as C from './styles';
import { CardMenu } from '../card-add';
import Popup from 'reactjs-popup';
import { useDrag } from '../../hooks/useDrag';

const List = ({ section, data, listIndex }) => {    
    const { drop, dragging } = useDrag()

    const [creating, setCreating] = useState(false)

    return (
        <C.Content 
            draggable={dragging.toString()}
            onDragOver={e => e.preventDefault()}
            onDrop={e => drop(e, listIndex)}>
            <C.SectionHeader>
                {section}
                <C.PopupButton onClick={() => setCreating(true)}>+</C.PopupButton>
            </C.SectionHeader>
            <Popup 
                nested
                open={creating} 
                closeOnDocumentClick={false}
                >
                <C.HideScreen onClick={() => setCreating(false)}/>
                <CardMenu setCreating={setCreating} listIndex={listIndex}/>
            </Popup>
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