import styled from "styled-components";

export const Button = styled.button`
    color: ${({theme}) => theme.colors.fontColors.primary};
    border-radius: ${({theme}) => theme.borderRadius.medium};
    font-size: ${({theme}) => theme.fontSizes.smallMedium};
    transition: ${({theme}) => theme.transitions.buttonHover};
    background-color: inherit;  
    border: none;
    padding: 4px 6px;
    text-align: center;

    :hover {
        background-color: ${({theme}) => theme.colors.blue.default};
        color: ${({theme}) => theme.colors.white};
        cursor: pointer;
    }
`
