import { useContext } from 'react'
import { DragTodoContext } from '../context/drag-todo-context'
import { useUserData } from './use-user-data'

export const useDragTodo = () => {
    const { todos, setTodos } = useUserData();

    const { dragItem, dragNode, dragging, setDragging } = useContext(DragTodoContext)

    const dragStart = (e, params) => {  
        dragNode.current = e.target;

        dragItem.current = params;
        
        dragNode.current.addEventListener('dragend', dragEnd);

        setTimeout(() => {
            setDragging(true)
        }, 0);
    }    
    
    const dragEnter = (e, params) => {
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

    const drop = (toSectionIndex) => {
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

        setTodos(newTodos)
    }
    
    const dragEnd = () => {
        dragNode.current.removeEventListener('dragend', dragEnd);
        dragNode.current = null;
        dragItem.current = null;
        setDragging(false);
    }    

    return { dragItem, dragging, dragStart, dragEnter, drop }
}