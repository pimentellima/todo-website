import React from 'react';
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
