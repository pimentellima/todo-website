import React from 'react';
import { generateHideMenu } from '../generate-hide-menu';
import * as S from './styles'

const PriorityField = (props) => {
    const { value, hidden, onChange, onHide } = props;

    return(
        <div hidden={hidden}>
            <S.Label htmlFor=''>
                Prioridade
                {generateHideMenu('priority', onHide)}
            </S.Label>
            <S.PrioritySelect 
                value={value}
                onChange={(e) => onChange('priority', e.target.value)}
                >
                <option value='Baixa'>Baixa</option>    
                <option>Media</option>
                <option>Alta</option>
            </S.PrioritySelect>
        </div>

    )
};

export default PriorityField;
