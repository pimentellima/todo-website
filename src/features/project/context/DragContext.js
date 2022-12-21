import React, { createContext, useRef, useState } from 'react'

export const DragContext = createContext()

export const DragProvider = ({ children }) => {
    const [dragging, setDragging] = useState(false);
    
    const dragItem = useRef();
    const dragNode = useRef();

    return(
        <DragContext.Provider value={{dragging, setDragging, dragItem, dragNode}}>
            {children}
        </DragContext.Provider>
    )
};