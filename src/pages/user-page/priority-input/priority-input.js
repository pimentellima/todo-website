import React from 'react';
import * as S from './styles';

const PriorityInput = ({ value, onChange }) => {
    return (
        <S.Select 
            name='priority'
            value={value}
            onChange={e => onChange(e)}
            selected={!!value}
            >
            <option value=''>Sem prioridade</option>
            <option value='Baixa'>Baixa</option>    
            <option value='Media'>Media</option>
            <option value='Alta'>Alta</option>
        </S.Select>
    )
};

export default PriorityInput;