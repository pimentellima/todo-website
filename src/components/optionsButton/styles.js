import styled, { css } from "styled-components";

export const Button = styled.button`
        margin-left: auto;
        color: #101820;
        padding: 4px;
        font-size: 14px;
        border: none;
        border-radius: 8px;
        background-color: white;
        transition: background-color 0.1s ease-out;
        visibility: hidden;
        
        :hover {
            background-color: #e8f2fa;
            cursor: pointer;
        }

        ${props => props.active && 
            css`
                color: #0b66ff;
                background-color: #e8f2fa;
                visibility: visible;
            `
        } 
    `

export const OptionsContainer = styled.div`
    padding: 4px 8px;
    border: 1px solid #c0d0e6;
    border-radius: 3px;
    background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-top: 20px;
`

export const OptionButton = styled.button` 
    padding: 7px 20px;
    border: none;
    border-radius: 4px;
    background-color: white;
    transition: background-color 0.1s ease-out, color 0.1s ease-out;

    :hover {
        background-color: #e8f2fa;
        cursor: pointer;
        color: #3b5bfd;
    }

`
