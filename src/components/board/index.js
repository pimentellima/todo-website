import React, { useState, useRef, useEffect, createContext, useContext } from 'react';

import { v4 as uuidv4 } from 'uuid';

import List from '../list'
import { Container } from './styles'

export const Context = createContext()

const Board = () => {

    const [sections, setSections] = useState(
       [ {name: "Tarefas", data:[]},
        {name: "Em Andamento", data:[]},
        {name: "Pausadas", data:[]},
        {name: "Finalizadas", data:[]} ])

        const [dragging, setDragging] = useState(false)
        const [dragItem, setDragItem] = useState()
        const [editing, setEditing] = useState(false)
        const [editingItem, setEditingItem] = useState()
    
        const todoInput = useRef()
        const dragNode = useRef()
    
        useEffect(() => {
            if(editing) {
                todoInput.current.focus()
            }    
        })    
        
        const move = (to, from, toList, fromList) => {
            const copySections = [...sections]
            const fromSection = copySections[fromList]
            const toSection = copySections[toList]
            const fromItem = fromSection.data[from]
            const toItem = toSection.data[to]
            toSection.data.splice(to, 1, fromItem)
            fromSection.data.splice(from, 1, toItem)
            copySections.splice(fromList, 1, fromSection)
            copySections.splice(toList, 1, toSection)
            setSections(copySections)
        }    

        const editTodo = () => {
            const copySections = [...sections]
            const todo = editingItem.todo
            const index = editingItem.index
            const listIndex = editingItem.listIndex
            const section = copySections[listIndex]
            const editedTodo = {...todo, name: todoInput.current.value}
            section.data.splice(index, 1, editedTodo)
            copySections.splice(listIndex, 1, section)
            setEditing(false)
            setEditingItem(null)
            setSections(copySections)
        }
    
        const addTodo = (listIndex) => {
            const newTodo = {name: "", id: uuidv4(), completed: false};
            const copySections = [...sections]
            const section = copySections[listIndex]
            section.data.push(newTodo)
            copySections.splice(listIndex, 1, section)
            setSections(copySections)
            setEditingItem({todo: newTodo, listIndex: listIndex, index: sections[listIndex].data.length - 1});
            setEditing(true);
        }

        const dragStart = (e, params) => {
            dragNode.current = e.target
            
            setDragItem(params)

            dragNode.current.addEventListener('dragend', dragEnd)

            setTimeout(() => {
                setDragging(true)
            }, 0)    
        }    
        
        const dragEnter = (e, params) => {
            e.preventDefault()
            const newItem = {...dragItem, index: params.index, listIndex: params.listIndex}
            move(params.index, dragItem.index, params.listIndex, dragItem.listIndex)
            setDragItem(newItem)
        }    
    
        const dragEnd = () => {
            dragNode.current.removeEventListener('dragend', dragEnd)
            dragNode.current = null;
            setDragItem(null)
            setDragging(false)
        }    
    
    return (
        <Context.Provider 
            value={{ editTodo, addTodo, dragStart, dragEnter, dragging, editing, editingItem, todoInput, dragItem }}>
            <Container>
                {sections.map((content, index) => 
                    <List  
                        section={content.name} 
                        data={content.data} 
                        listIndex={index} 
                        key={index}/>)}
            </Container>
        </Context.Provider>
    );
};

export default Board;