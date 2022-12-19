import styled, { css } from "styled-components";

export const Input = styled.input`
    font-size: 16px;
    padding: 13px 10px;
    border: 1px solid #eef2f8;
    border-radius: 4px;
    background-color: #eef2f8;
    transition: border-color 0.1s ease-out ;

    ${props => props.isInvalid ? 
        css`
            border-color: #f00 ;
        `
        :
        css`
            :hover, :focus, :active {
                border-color: #3b5bfd;
            }
        `
    }

    :hover, :focus, :active {
        background-color: white;
    }
    
    ::placeholder {
        font-size: 15px;
        color: #849aac; 
    }
`
