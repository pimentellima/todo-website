import styled from "styled-components";

export const PopupButton = styled.button`
    color:${({theme}) => theme.colors.grey.dark};
    border: none;
    background: inherit;

    :hover {
        cursor: pointer;
        color: ${({theme}) => theme.colors.blue.default};
    }
`

export const Content = styled.div`
    border: 1px solid ${({theme}) => theme.colors.border.default};
    background-color: ${({theme}) => theme.colors.white};
    display: flex;
    flex-direction: column;
    padding: 3px 7px;
    border-radius: 3px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-top: 10px;
`

export const OptionButton = styled.button`
    font-size: ${({theme}) => theme.fontSizes.smallMedium};
    border-radius: ${({theme}) => theme.borderRadius.small};
    color: ${({theme}) => theme.colors.fontColors.primary};
    background-color: ${({theme}) => theme.colors.white};
    padding: 7px 20px;
    border: none;
    width: 150px;
    transition: ${({theme}) => theme.transitions.buttonHover};

    :hover {
        background-color: ${({theme}) => theme.colors.blue.default};;
        color: ${({theme}) => theme.colors.white};
        cursor: pointer;
    }
`

