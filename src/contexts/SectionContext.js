import React, { useState, useRef, createContext, useContext } from 'react';

import { UserContext } from './UserContext';

import { v4 as uuidv4 } from 'uuid';

export const SectionContext = createContext()

export const SectionProvider = ({ children }) => {
    const { user, setUser } = useContext(UserContext);
    const sections = user.sections;
    
    const [dragging, setDragging] = useState(false)
    const [dragItem, setDragItem] = useState()
    const [editing, setEditing] = useState(false)
    const [editingItem, setEditingItem] = useState()
    
    const dragNode = useRef()

    const setSections = ( newSections ) => {
        const usersStorage = JSON.parse(localStorage.getItem("users"))
        const newUser = {...user, sections: newSections}
        const newStorage = usersStorage.filter(item => item.username != user.username)
        newStorage.push(newUser)
        localStorage.setItem("users", JSON.stringify(newStorage))
        setUser(newUser)
    }

/*     const editCard = (params) => {
        setEditingItem({card: params.card, listIndex: params.listIndex, index: params.index});
        setEditing(true);
    }

    const saveCard = (cardName) => {
        const copySections = [...sections]
        const card = editingItem.card
        const index = editingItem.index
        const listIndex = editingItem.listIndex
        const section = copySections[listIndex]
        const editedcard = {...card, name: cardName}
        section.data.splice(index, 1, editedcard)
        copySections.splice(listIndex, 1, section)
        setEditing(false)
        setEditingItem(null)
        setSections(copySections)
    } */

    const addCard = (card, listIndex) => {
        const copySections = [...sections]
        const section = copySections[listIndex]
        section.data.push(card)
        copySections.splice(listIndex, 1, section)
        setSections(copySections)
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
        const copySections = [...sections]
        const fromSection = copySections[dragItem.listIndex]
        const fromItem = dragItem.card
        const toSection = copySections[params.listIndex]
        const toItem = toSection.data[params.index]

        if(params.listIndex == dragItem.listIndex) {
            toSection.data.splice(params.index, 1, fromItem)
            fromSection.data.splice(dragItem.index, 1, toItem)
        }
        else {
            toSection.data.splice(params.index, 0, fromItem)
            fromSection.data.splice(dragItem.index, 1)
        }
        copySections.splice(dragItem.listIndex, 1, fromSection)
        copySections.splice(params.listIndex, 1, toSection)
        setDragItem(newItem)
        setSections(copySections)
    }    
    
    const drop = (e, listIndex) => {
        if(dragItem.listIndex != listIndex) {
            const copySections = [...sections]
            const fromSection = copySections[dragItem.listIndex]
            const toSection = copySections[listIndex]
            const fromItem = dragItem.card
            fromSection.data.splice(dragItem.index, 1)
            toSection.data.push(fromItem)
            copySections.splice(dragItem.listIndex, 1, fromSection)
            copySections.splice(listIndex, 1, toSection)
            setSections(copySections)
             
        }
    }
    
    const dragEnd = () => {
        dragNode.current.removeEventListener('dragend', dragEnd)
        dragNode.current = null;
        setDragItem(null)
        setDragging(false)
    }    

    return (
            <SectionContext.Provider value={
                { sections: user.sections,
                dragging, 
                editing, 
                editingItem, 
                dragItem, 
                addCard, 
                dragStart, 
                dragEnter, 
                drop }}>
                { children }
            </SectionContext.Provider>
        )
}