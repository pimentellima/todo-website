import React, { useContext } from 'react';

import Card from "../card";
import { Container } from './styles';
import { Context } from '../board/index'

const List = ({ section, data, listIndex }) => {    
    const { addTodo } = useContext(Context)


    return (
            <Container>
                <header>
                    <h2>{section}</h2>
                    <button onClick={() => addTodo(listIndex)}>+</button>
                </header>
                <ul>
                {data.map((todo, index) => 
                    <Card 
                        todo={todo} 
                        index={index}
                        listIndex={listIndex}
                        key={todo.id} 
                    />
                )}
                </ul>
            </Container>
        )
}

export default List;