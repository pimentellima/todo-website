import React from 'react';
import PopupMenu from '../../popup-menu/popup-menu'
import * as S from './styles'

const PriorityField = (props) => {
    const { value, hidden, handleChange, handleHide } = props;

    return(
        <div hidden={hidden}>
            <S.Label>
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
                onChange={e => handleChange(e.target.value, 'priority')}
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
