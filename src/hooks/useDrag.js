import  { useContext } from 'react'
import { DragContext } from '../contexts/dragContext'

export const useDrag = () => {
    const { dragItem,
        dragging,
        dragStart,
        dragEnter,
        drop } = useContext(DragContext)

    return { dragItem, dragging, dragStart, dragEnter, drop }
}