import styled, { css } from 'styled-components'

export const DragShadow = styled.div`
    ${props => props.isBeingDragged && 
        css`
            min-height: 140px;
            background-color: rgba(0, 0, 0, 0.03);
            border-radius: 5px;
            margin-bottom: 10px;
         `
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 75px;
    word-break: break-all;
    border-radius: 5px;
    box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
    background: #FFF;

    :hover {
        cursor: pointer;
    }
    
    ${props => props.isBeingDragged && 
        css`
            opacity: 0%;
        `
    }
    
    & {
        margin-bottom: 10px;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    color: #101820;
    gap: 10px;
    padding: 12px 10px 12px 10px;
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    padding: 5px;
    background-color: rgba(230, 236, 245, 0.4);
    height: 20px;
`

export const Title = styled.h1`
    font-size: 15px;
    margin-bottom: 3px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`

export const Priority = styled.div`
    display: flex;
    font-weight: 600;
    font-size: 11px;
    padding: 2px 5px 2px 5px;
    margin-left: auto;
    border-radius: 10px;
    ${props => {
        if(props.priority === 'Alta') {
            return css`
                color: white;
                background-color: rgb(255, 61, 0);
            `
        }
        if(props.priority === 'Baixa') {
            return css`
                color: white;
                background-color: rgb(41, 121, 255);
            `
        }
        if(props.priority === 'Media') {
            return css`
                color: black;
                background-color: rgb(255, 171, 0);
            `
        }
    }};
`



