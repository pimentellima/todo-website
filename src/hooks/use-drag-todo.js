import { useContext } from 'react'
import { DragTodoContext } from '../context/drag-todo-context'
import { useUserData } from './use-user-data'

export const useDragTodo = () => {
    const { todos, setTodos } = useUserData();

    const { dragItem, dragNode, dragging, setDragging } = useContext(DragTodoContext)

    const onDragStart = (e, params) => {  
        e.target.scrollIntoView();
        dragNode.current = e.target;

        dragItem.current = params;
        
        dragNode.current.addEventListener('dragend', onDragEnd);

        setTimeout(() => {
            setDragging(true)
        }, 0);
    }    
    
    const onDragEnterCard = (e, params) => {
        e.preventDefault();
        e.stopPropagation();

        const fromIndex = dragItem.current.index
        const fromSectionIndex = dragItem.current.sectionIndex
        const toIndex = params.index
        const toSectionIndex = params.sectionIndex 

        if(toIndex === fromIndex && toSectionIndex === fromSectionIndex) return

        const newTodos = [...todos];
        const fromSection = newTodos[fromSectionIndex];
        const toSection = newTodos[toSectionIndex];
        const fromItem = fromSection.content[fromIndex];

        fromSection.content.splice(fromIndex, 1);
        toSection.content.splice(toIndex, 0, fromItem);

        newTodos.splice(fromSectionIndex, 1, fromSection);
        newTodos.splice(toSectionIndex, 1, toSection);
        
        setTodos(newTodos);
        
        dragItem.current = params;
    }    

    const onDragEnterSection = (e, toSectionIndex) => {
        e.preventDefault();
        e.stopPropagation();

        const fromIndex = dragItem.current.index
        const fromSectionIndex = dragItem.current.sectionIndex

        if (toSectionIndex === fromSectionIndex) return

        const newTodos = [...todos];
        const fromSection = newTodos[fromSectionIndex]
        const toSection = newTodos[toSectionIndex];
        const fromItem = fromSection.content[fromIndex];

        fromSection.content.splice(fromIndex, 1);
        toSection.content.push(fromItem);

        newTodos.splice(fromSectionIndex, 1, fromSection);
        newTodos.splice(toSectionIndex, 1, toSection);

        dragItem.current = {index: toSection.content.length - 1, sectionIndex: toSectionIndex}

        setTodos(newTodos)
    } 
    
    const onDragEnd = () => {
        dragNode.current.removeEventListener('dragend', onDragEnd);
        dragNode.current = null;
        dragItem.current = null;
        setDragging(false);
    }    

    return { dragItem, dragging, onDragStart, onDragEnterCard, onDragEnterSection }
}