import styled from "styled-components";

const LightButton = styled.button`
    font-size: ${({theme}) => theme.fontSizes.smallMedium};
    border-radius: ${({theme}) => theme.borderRadius.small};
    color: ${({theme}) => theme.colors.fontColors.primary};
    background-color: ${({theme}) => theme.colors.white};
    padding: 7px 20px;
    border: none;
    transition: ${({theme}) => theme.transitions.buttonHover};

    :hover {
        background-color: ${({theme}) => theme.colors.blue.default};
        color: ${({theme}) => theme.colors.white};
        cursor: pointer;
    }
`

export default LightButton;