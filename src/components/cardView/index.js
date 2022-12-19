import React, { useState, useRef, useContext } from "react";
import * as C from './styles'
import { Input } from "../card-add/styles";

const CardView = ({ card, index, listIndex }) => {

    const [editingTitle, setEditingTitle] = useState(false)
    const [editingDescription, setEditingDescription] = useState(false)

    const titleRef = useRef()
    const descriptionRef = useRef()

    const handleSubmit = e => {
        
    }

    return (
        <C.Container>
            {card.title}
            <C.Label htmlFor="">
                Título da tarefa
                <C.Button type='button' onClick={() => setEditingTitle(true)}>editar</C.Button>
            </C.Label>
            {editingTitle ? 
                <C.Form>
                    <Input
                        autoFocus
                        defaultValue={card.title}
                        ref={titleRef}
                        onKeyDown={e => e.key === 'Enter' && handleSubmit(e)}
                        placeholder= "Digite aqui ..."
                        type='text'
                        onBlur={() => setEditingTitle(false)}
                        onSubmit={(e) => handleSubmit(e)}
                        />
                </C.Form>
                :
                <C.Text>{card.title}</C.Text>
            }
            {card.description && 
                <C.Field>
                    <C.Label htmlFor="">
                        Descrição
                        <C.Button type='button' onClick={() => setEditingDescription(true)}>editar</C.Button>
                    </C.Label>
                    {editingDescription ? 
                        <Input
                            autoFocus
                            defaultValue={card.description}
                            ref={descriptionRef}
                            onKeyDown={e => e.key === 'Enter' && handleSubmit(e)}
                            placeholder= "Digite aqui ..."
                            type='text'
                            onBlur={() => setEditingDescription(false)}
                            />
                        :
                        <C.Text>{card.description}</C.Text>
                    }
                </C.Field>
            }
        </C.Container>
    )
}

export default CardView;