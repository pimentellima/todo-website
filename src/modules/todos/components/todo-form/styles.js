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

export const AddFieldDiv = styled.div`
    display: flex;
    margin: 15px 0 15px 0;
    gap: 3px;
`

export const AddFieldButton = styled.button`
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

    :hover {
        background-color: ${({theme}) => theme.colors.blue.dark};
        cursor: pointer;
    }   
`