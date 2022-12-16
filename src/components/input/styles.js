import styled, { css } from 'styled-components'

export const Input = styled.input`
    padding-left: 10px;
    border: none;
    width: 100%;
    font-size: 15px;
    color: black;
    
    ::placeholder {
        color: #849aac;
    }
`
export const Content = styled.label`
    display: flex;
    border: 1px solid;
    height: 50px;
    transition: border-color 0.15s linear;
    
    ${props => props.isInvalid ? 
        css`
            border-color: #f00;
        ` 
        :
        css`
            border-color: #c0d0e6;
            
            :focus-within {
                border-color: rgba(0,0,0,0.3);
            }
        `
    };

    & {
        margin-top: 15px;
    }
`

export const InputIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
    background-color: #ecf1f8;
`

