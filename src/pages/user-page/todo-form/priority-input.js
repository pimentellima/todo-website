import React from 'react';
import styled from 'styled-components';

const PriorityInput = ({ value, onChange }) => {
    return (
        <Select 
            name='priority'
            value={value}
            onChange={e => onChange(e)}
            selected={!!value}
            >
            <option value=''>Sem prioridade</option>
            <option value='Baixa'>Baixa</option>    
            <option value='Media'>Media</option>
            <option value='Alta'>Alta</option>
        </Select>
    )
};

const Select = styled.select`
    background-color: ${({theme}) => theme.colors.background};
    border: 1px solid ${({theme}) => theme.colors.background};
    border-radius: ${({theme}) => theme.borderRadius.medium};
    font-size: ${({theme}) => theme.fontSizes.medium};
    transition: ${({theme}) => theme.transitions.buttonHover};
    height: 50px;
    text-indent: 7px;
    width: 100%;
    color: ${({theme, selected}) => 
        selected ? 
            theme.colors.fontColors.primary :
            theme.colors.fontColors.placeholder
        };
    
    > option {
        color: ${({theme}) => theme.colors.fontColors.primary};

        :first-child {
            color: ${({theme}) => theme.colors.fontColors.placeholder};
        }
    }
    
    :hover, :active {
        background-color: ${({theme}) => theme.colors.white};
        border-color: ${({theme}) => theme.colors.blue.light};
        cursor: pointer;
    }
`

export default PriorityInput;