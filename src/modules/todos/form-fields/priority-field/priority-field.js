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
                            handler: () => onHide('priority')
                        }]}
                    />
            </S.Label>
            <S.PrioritySelect 
                name='priority'
                value={value}
                onChange={(e) => onChange(e)}
                >
                <option value=''>Selecione uma opção</option>
                <option value='Baixa'>Baixa</option>    
                <option value='Media'>Media</option>
                <option value='Alta'>Alta</option>
            </S.PrioritySelect>
        </div>

    )
};

export default PriorityField;
