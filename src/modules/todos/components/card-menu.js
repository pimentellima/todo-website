import React from "react";
import { useRemoveTodo } from "../hooks/use-remove-todo";
import PopupMenu from "./popup-menu/popup-menu";

const CardMenu = ({index, sectionIndex}) => {
    const removeTodo = useRemoveTodo();
    
    return (
        <PopupMenu 
            position='right bottom'
            options={[
                {
                    label:'Remover tarefa', 
                    handler: () => removeTodo(index, sectionIndex)
                }
            ]}/>
    )
};

export default CardMenu;