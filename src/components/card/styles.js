import styled, { css } from 'styled-components'

export const CardMenuContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 540px;
    padding: 30px;
    border-radius: 5px;
    background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    p {
        color: #101820;
        font-size: 22px;
        margin-bottom: 30px ;
    }
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 75px;
    margin-bottom: 20px;
    word-break: break-all;
    border-radius: 5px;
    box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
    background: #FFF;
    cursor: pointer;
    ${props => props.isBeingDragged ? 
        css`
            opacity: 0%;
        ` 
        :
        css`
            :hover{
                opacity: 80%;
            }
        `
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
    cursor: pointer;    
    font-size: 15px;
    margin-bottom: 3px;
`

export const PropertyContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const PropertyHeader = styled.header`
    display: flex;
    color: #92a5b3;
    font-size: 13px;
    margin-bottom: 2px;
`

export const PropertyLabel = styled.label`
    margin-left: 5px;
    align-self: flex-end;
    font-size: 10px;
    color: #48626f;
`

export const PropertySpan = styled.span`
    text-indent: 20px;
    cursor: pointer;
    font-size: 11px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`
export const PriorityLabel = styled.div`
    display: flex;
    cursor: pointer;
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

