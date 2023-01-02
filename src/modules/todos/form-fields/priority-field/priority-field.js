import React from 'react';
import * as S from './styles'
import PopupMenu from '../../components/popup-menu/popup-menu'

const PriorityField = (props) => {
    const { value, hidden, onChange, onHide } = props;

    return(
        <div hidden={hidden}>
            <S.Label htmlFor=''>
                Prioridade
                <PopupMenu 
                    position='bottom right'
                    options={[
                        {
                            label: 'Remover campo', 
                            handler: () => onHide(label, true)
                        }]}
                    />
            </S.Label>
            <S.PrioritySelect 
                value={value}
                onChange={(e) => onChange('priority', e.target.value)}
                >
                <option>Baixa</option>    
                <option>Media</option>
                <option>Alta</option>
            </S.PrioritySelect>
        </div>

    )
};

export default PriorityField;
