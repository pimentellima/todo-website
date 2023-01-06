import React from "react";
import PopupMenu from '../popup-menu'
import styled, { css } from "styled-components";

const Header = (props) => {
    const {
        priority,
        index,
        sectionIndex,
        removeTodo
    } = props;

    return (
        <Wrapper>
            <PopupMenu 
                position='right bottom'
                options={[
                    {
                        label:'Remover tarefa', 
                        handler: () => removeTodo(index, sectionIndex)
                    }
                ]}/>
                {priority &&
                    <PriorityLabel priority={priority}>
                        {priority}
                    </PriorityLabel>
                }
        </Wrapper>
    )
};

const Wrapper = styled.div`
    background-color: ${({theme}) => theme.colors.grey.light};
    border-radius: inherit;
    display: flex;
    align-items: center;
    padding: 5px;
    height: 20px;
`

const PriorityLabel = styled.div`
    display: flex;
    font-weight: bold;
    font-size: 11px;
    padding: 2px 5px 2px 5px;
    margin-left: auto;
    border-radius: ${({theme}) => theme.borderRadius.large};

    ${props => {
        if(props.priority === 'Alta') {
            return css`
                color: ${({theme}) => theme.colors.white};
                background-color: ${({theme}) => theme.colors.red};
            `
        }
        if(props.priority === 'Baixa') {
            return css`
                color: ${({theme}) => theme.colors.white};
                background-color: ${({theme}) => theme.colors.blue.light};
            `
        }
        if(props.priority === 'Media') {
            return css`
                color: ${({theme}) => theme.colors.black};
                background-color: ${({theme}) => theme.colors.yellow};
            `
        }
    }};
`


export default Header;