import styled, { css } from "styled-components";

export const Input = styled.input`
    font-size: ${({theme}) => theme.fontSizes.large};
    border: 1px solid ${({theme}) => theme.colors.grey.light};
    background-color: ${({theme}) => theme.colors.grey.light};
    color: ${({theme}) => theme.colors.fontColors.secondary};
    transition: border-color 0.15s ease-out ;
    width: 100%;
    padding: 13px 10px;
    border-radius: 4px;

    ${props => props.isInvalid ? 
        css`
            border-color: ${({theme}) => theme.colors.red} ;
        `
        :
        css`
            :hover, :focus, :active {
                border-color: ${({theme}) => theme.colors.blue.light};
            }
        `
    }

    :hover, :focus, :active {
        background-color: white;
    }
    
    ::placeholder {
        font-size: 15px;
        color: ${({theme}) => theme.colors.fontColors.placeholder};
    }
`
