import styled from "styled-components";

export const Form = styled.form`
    border-radius: ${({theme}) => theme.borderRadius.normal}; 
    box-shadow: ${({theme}) => theme.boxShadow.form};
    color: ${({theme}) => theme.colors.textColor};
    background-color: ${({theme}) => theme.colors.white};
    font-size: ${({theme})=> theme.fontSizes.veryLarge};
    display: flex;
    flex-direction: column;
    margin: 38px 0 25px 0;
    padding: 30px;
    width: 400px;
    gap: 4px;

    > :first-child {
        margin-top: 15px;
    };

    > :last-child {
        margin-top: 15px;
    };
`

export const Button = styled.button`
    background-color: #3b5bfd;
    text-align: center;
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 18px;    

    :hover {
        cursor: pointer;
    }   
`
