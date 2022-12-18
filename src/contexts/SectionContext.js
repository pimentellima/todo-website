import React, { useEffect, useState, useRef, createContext, useContext } from 'react';

import { UserContext } from './UserContext';


export const SectionContext = createContext()

export const SectionProvider = ({ children }) => {
    const { user, setUser } = useContext(UserContext);
    const sections = user.sections;

    const [dragging, setDragging] = useState(false)
    
    const dragItem = useRef()
    const dragNode = useRef()

    const setSections = ( newSections ) => {
        const usersStorage = JSON.parse(localStorage.getItem("users"))
        const newUser = {...user, sections: newSections}
        const newStorage = usersStorage.filter(item => item.username != user.username)
        newStorage.push(newUser)
        localStorage.setItem("users", JSON.stringify(newStorage))
        setUser(newUser)
    }

    const addCard = (params) => {
        const listIndex = params.listIndex 
        const copySections = [...sections]
        const section = copySections[listIndex]
        section.data.push(params.card)
        copySections.splice(listIndex, 1, section)
        setSections(copySections)
    }

    const editCard = (params) => {
        const listIndex = params.listIndex 
        const index = params.index
        const card = params.card
        const copySections = [...sections]
        const section = copySections[listIndex]
        section.data.splice(index, 1, card)
        copySections.splice(listIndex, 1, section)
        setSections(copySections)
    }

    const dragStart = (e, params) => {
        dragNode.current = e.target
        
        dragItem.current = params

        dragNode.current.addEventListener('dragend', dragEnd)

        setTimeout(() => {
            setDragging(true)
        }, 0)    
    }    
    
    const dragEnter = (e, params) => {
        e.preventDefault()

        if(params.index === dragItem.current.index && params.listIndex === dragItem.current.listIndex) return

        const copySections = [...sections]
        const fromSection = copySections[dragItem.current.listIndex]
        const toSection = copySections[params.listIndex]
        const fromItem = fromSection.data[dragItem.current.index]

        fromSection.data.splice(dragItem.current.index, 1)
        toSection.data.splice(params.index, 0, fromItem)

        copySections.splice(dragItem.current.listIndex, 1, fromSection)
        copySections.splice(params.listIndex, 1, toSection)
        
        const newDragItem = {...dragItem.current, index: params.index, listIndex: params.listIndex}
        setSections(copySections)   
        dragItem.current = newDragItem    
    }    
    
    const drop = (e, listIndex) => {
        if (listIndex == dragItem.current.listIndex) return
        const copySections = [...sections]
        const fromSection = copySections[dragItem.current.listIndex]
        const toSection = copySections[listIndex]
        const fromItem = dragItem.current.card
        fromSection.data.splice(dragItem.current.index, 1)
        toSection.data.push(fromItem)
        copySections.splice(dragItem.current.listIndex, 1, fromSection)
        copySections.splice(listIndex, 1, toSection)
        setSections(copySections)
    }
    
    const dragEnd = () => {
        dragNode.current.removeEventListener('dragend', dragEnd)
        dragNode.current = null;
        dragItem.current = null;
        setDragging(false)
    }    

    return (
            <SectionContext.Provider value={{ 
                sections: user.sections,
                dragItem: dragItem.current, 
                dragging, 
                addCard,
                dragStart, 
                dragEnter, 
                drop
                }}>
                { children }
            </SectionContext.Provider>
        )
}