import React, { createContext, useRef, useState } from 'react'

export const DragTodoContext = createContext()

export const DragTodoProvider = ({ children }) => {
    const [dragging, setDragging] = useState(false);
    
    const dragItem = useRef();
    const dragNode = useRef();

    return(
        <DragTodoContext.Provider 
            value={{
                dragging, 
                setDragging, 
                dragItem, 
                dragNode}}
            >
            {children}
        </DragTodoContext.Provider>
    )
};