import styled from 'styled-components';

export const Form = styled.form`
    background-color: ${({theme}) => theme.colors.white};
    box-shadow: ${({theme}) => theme.boxShadow.form};
    border-radius: ${({theme}) => theme.borderRadius.medium};
    display: flex;
    flex-direction: column;
    width: 500px;
    padding: 30px;
`

export const Title = styled.p`
    font-size: ${({theme}) => theme.fontSizes.veryLarge};
    margin-bottom: 18px;
    padding-bottom: 18px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`

export const Label = styled.label`
    color: ${({ theme }) => theme.colors.textColor};
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    margin: 12px 0 8px 0;
    
` 

export const SubmitButton = styled.button`
    border-radius: ${({theme}) => theme.borderRadius.medium};
    background-color: ${({theme}) => theme.colors.blue.default};
    transition: ${({theme}) => theme.transitions.buttonHover};
    font-size: ${({theme}) => theme.fontSizes.large};
    color: ${({theme}) => theme.colors.white};
    height: 45px;
    width: 100%;
    border: none;
    padding: 4px;
    margin-top: 15px;

    :hover {
        background-color: ${({theme}) => theme.colors.blue.dark};
        cursor: pointer;
    }   
`
