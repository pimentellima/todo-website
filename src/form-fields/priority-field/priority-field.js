import React, { useEffect } from 'react';
import PopupMenu from '../../ui/popup-menu/popup-menu'
import * as S from './styles'

const PriorityField = (props) => {
    const { value, hidden, onChange, handleHide } = props;

    return(
        <div hidden={hidden}>
            <S.Label htmlFor=''>
                Prioridade
                <PopupMenu 
                    position='bottom right'
                    options={[
                        {
                            label: 'Remover campo', 
                            handler: () => handleHide('priority', true)
                        }]}
                    />
            </S.Label>
            <S.PrioritySelect 
                value={value}
                onChange={(value) => onChange('priority', value)}
                >
                <option hidden value= ''>Selecione a prioridade</option>
                <option>Baixa</option>    
                <option>Media</option>
                <option>Alta</option>
            </S.PrioritySelect>
        </div>

    )
};

export default PriorityField;
