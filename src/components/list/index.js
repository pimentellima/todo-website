import React, { useContext } from 'react';

import Card from "../card";
import { Container } from './styles';
import { SectionContext } from '../../contexts/SectionContext';

const List = ({ section, data, listIndex }) => {    
    const { addTodo, dragging, drop } = useContext(SectionContext)

    return (
            <Container section={ section }
                        draggable={dragging.toString()}
                        onDragOver={e => e.preventDefault()}
                        onDrop={ e => drop(e, listIndex) }>
                <header>
                    <p>{section}</p>
                    { section == "Tarefas" ? <button onClick={() => addTodo(listIndex)}>+</button> : <></>}
                </header>
                <ul>
                {data.map((todo, index) => 
                    <Card 
                        todo={todo} 
                        index={index}
                        listIndex={listIndex}
                        section={section}
                        key={todo.id} 
                    />
                )}
                </ul>
            </Container>
        )
}

export default List;