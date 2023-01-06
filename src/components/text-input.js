import React from 'react';
import styled, { css } from 'styled-components';

const TextInput = (props) => {
    const { 
        label, 
        value, 
        type, 
        placeholder, 
        errorMessage, 
        onChange 
    } = props;

    return (
        <>
            <StyledInput
                name={label}
                value={value}
                type={type}
                placeholder={placeholder}
                onChange={e => onChange(e)}
                isInvalid={!!errorMessage}
            />
            <StyledText>{errorMessage}</StyledText>
        </>
    )
};

const StyledInput = styled.input`
    font-size: ${({theme}) => theme.fontSizes.large};
    border: 1px solid ${({theme}) => theme.colors.grey.light};
    background-color: ${({theme}) => theme.colors.grey.light};
    color: ${({theme}) => theme.colors.fontColors.secondary};
    width: 100%;
    padding: 13px 10px;
    border-radius: 4px;
    transition: border-color 0.15s ease-out ;

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

const StyledText = styled.p`
    font-size: ${({theme}) => theme.fontSizes.small};
    color: ${({theme}) => theme.colors.red};
    display: flex;
    text-align: start;
`

export default TextInput;