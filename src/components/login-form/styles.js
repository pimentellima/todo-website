import styled from "styled-components"

export const Form = styled.form`
    border-radius: ${({theme}) => theme.borderRadius.normal}; 
    color: ${({theme}) => theme.colors.textColor};
    background-color: ${({theme}) => theme.colors.white};
    font-size: ${({theme})=> theme.fontSizes.veryLarge};
    display: flex;
    flex-direction: column;
    margin: 38px 0 25px 0;
    padding: 30px;
    width: 400px;
    gap: 4px;
`

export const Error = styled.p`
    font-size: ${({theme}) => theme.fontSizes.small};
    color: ${({theme}) => theme.colors.red};
    display: flex;
    text-align: start;
`
