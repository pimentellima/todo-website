import React, { useContext } from 'react';
import { Container } from './styles'
import { Context } from '../board/index'

const Card = ( { todo, index, listIndex } ) => {
    const { editTodo, dragStart, dragEnter, dragging, editing, editingItem, todoInput, dragItem } = useContext(Context)

    return (
            editing && editingItem.todo.id == todo.id ? 
                <Container isBeingDragged={ false }>
                        <form onSubmit={() => {editTodo()}}>
                            <input ref={todoInput} type='text' onBlur={() => {editTodo()}}/>
                        </form>
                </Container>
                : 
                <Container isBeingDragged={ dragging && listIndex == dragItem.listIndex && index == dragItem.index }
                            draggable
                            onDragStart={e => dragStart(e, {todo, index, listIndex})}
                            onDragEnter={(e) => dragEnter(e, {todo, index, listIndex})}
                            onDragOver={e => e.preventDefault()}
                            onDrop={e => e.preventDefault()}>

                    <p>{todo.name}</p>

                </Container>
    )
}

export default Card;