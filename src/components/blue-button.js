import styled from "styled-components";

const BlueButton = styled.button`
    border: ${({theme}) => theme.colors.border.default};
    background-color: ${({theme}) => theme.colors.blue.default};
    color: ${({theme}) => theme.colors.white};
    font-size: ${({theme}) => theme.fontSizes.large};
    border-radius: ${({theme}) => theme.borderRadius.medium};
    min-width: 200px;
    height: 40px;
    padding: 0 20px 0 20px;
    text-align: center;
    transition: ${({theme}) => theme.transitions.buttonHover};

    :hover {
        background-color: ${({theme}) => theme.colors.blue.dark};
        cursor: pointer;
    }   
`

export default BlueButton;