import styled from "styled-components"

export const Form = styled.form`
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.textColor};
    font-size: ${({theme})=> theme.fontSizes.veryLarge};
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 38px 0 25px 0;
    padding: 30px;
    gap: 4px;
`

export const Error = styled.p`
    display: flex;
    text-align: start;
    font-size: ${({theme}) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors.red};
`
