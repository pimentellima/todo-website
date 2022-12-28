import styled, { css } from "styled-components";

export const Label = styled.label`
    color: ${({ theme }) => theme.colors.textColor};
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    margin: 12px 0 8px 0;
`

export const PrioritySelect = styled.select`
    background-color: ${({theme}) => theme.colors.background};
    border: 1px solid ${({theme}) => theme.colors.background};
    border-radius: ${({theme}) => theme.borderRadius.medium};
    font-size: ${({theme}) => theme.fontSizes.medium};
    transition: ${({theme}) => theme.transitions.buttonHover};
    color: ${({theme}) => theme.colors.fontColors.placeholder};
    height: 50px;
    text-indent: 7px;
    width: 100%;

    ${props => props.selected && 
        css`
            color: ${({theme}) => theme.colors.fontColors.secondary};
        `
    }  
    
    :hover, :active {
        background-color: ${({theme}) => theme.colors.white};
        border-color: ${({theme}) => theme.colors.blue.light};
        cursor: pointer;
    }
`