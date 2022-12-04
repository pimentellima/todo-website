import React, { useContext } from 'react';

import Card from "../card";
import { Container } from './styles';
import { Context } from '../board/index'

const List = ({ section, data, listIndex }) => {    
    const { addTodo, dragStart, dragEnter, dragging, drop } = useContext(Context)


    return (
            <Container section={ section }
                        draggable={dragging.toString()}
                        onDragOver={e => e.preventDefault()}
                        onDrop={ e => drop(e, listIndex) }>
                <header>
                    <h2>{section}</h2>
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