import React, { useContext } from 'react';
import { Container } from './styles'
import { Context } from '../board/index'

const Card = ( { todo, index, listIndex, section } ) => {
    const { editTodo, saveTodo, dragStart, dragEnter, dragging, editing, editingItem, todoInput, dragItem } = useContext(Context)

    const handleKeyDown = (e) => {
        if(e.keyCode == 13) handleSaveTodo()
    }

    const handleSaveTodo = () => {
        let todoName = todo.name
        if(todoInput.current.value != '') {
            todoName = todoInput.current.value
        } 
        saveTodo(todoName)
    }

    const handleEditTodo = () => {
        if(section == "Finalizadas") return
        editTodo({ todo, listIndex, index })
    }

    return (
            editing && editingItem.todo.id == todo.id ? 
                <Container isBeingDragged={ false }>
                        <input onKeyDown={e => handleKeyDown(e)} onBlur={handleSaveTodo} placeholder={todo.name} ref={todoInput} type='text'/>
                </Container>
                : 
                <Container isBeingDragged={ dragging && listIndex == dragItem.listIndex && index == dragItem.index }
                            draggable
                            onDragStart={e => dragStart(e, { todo, index, listIndex })}
                            onDragEnter={e => {dragEnter(e, { todo, index, listIndex }); e.stopPropagation()}}
                            onDragOver={e => e.preventDefault()}
                            onDrop={e => e.preventDefault()}
                            onDoubleClick={handleEditTodo}>

                    <p>{todo.name}</p>

                </Container>
    )
}

export default Card;