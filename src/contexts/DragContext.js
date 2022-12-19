import React, { createContext, useRef, useState } from 'react'
export const DragContext = createContext()
import { useSections } from '../hooks/useSections';

export const DragProvider = ({ children }) => {
    const [dragging, setDragging] = useState(false)
    
    const dragItem = useRef()
    const dragNode = useRef()

    const { moveToIndex, moveToList } = useSections()

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

        moveToIndex(dragItem.current, params)
        
        dragItem.current = params    
    }    

    const drop = (e, listIndex) => {
        if (listIndex === dragItem.current.listIndex) return

        moveToList(dragItem.current, listIndex)
    }
    
    const dragEnd = () => {
        dragNode.current.removeEventListener('dragend', dragEnd)
        dragNode.current = null;
        dragItem.current = null
        setDragging(false)
    }    

    return(
        <DragContext.Provider value={{
            dragItem,
            dragging,
            dragStart,
            dragEnter,
            drop
        }}>
            {children}
        </DragContext.Provider>
    )
};