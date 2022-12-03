import styled, { css } from 'styled-components'

export const Container = styled.div`
    margin: 10px 0px;
    height: 100px;
    padding: 15px;
    word-break: break-all;
    border-radius: 5px;
    box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
    border-top: 20px solid rgba(230, 236, 245, 0.4);
    background: #FFF;
    cursor: grab;

    p, input {
        font-weight: 600;
    }

    input {
        border: 0;
    }

    ${props => props.isBeingDragged ? 
        css`
            opacity: 0%;
        ` :
        css`
            :hover{
                opacity: 80%;
            }
        `
    }
    
`

