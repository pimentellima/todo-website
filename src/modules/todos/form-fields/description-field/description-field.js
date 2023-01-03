import React from "react";
import * as S from './styles'
import PopupMenu from '../../components/popup-menu/popup-menu'

const DescriptionField = (props) => {
    const { value, hidden, onChange, onHide } = props;

    return ( 
        <div hidden={hidden}>
            <S.Label htmlFor=''>
                Descrição
                <PopupMenu 
                    position='bottom right'
                    options={[
                        {
                            label: 'Remover campo', 
                            handler: () => onHide('description')
                        }]}
                    />
            </S.Label>
            <S.Input    
                type='text'
                placeholder='Digite aqui ...'
                value={value}
                onChange={e => onChange('description', e.target.value)}
                />
        </div>
    )
}

export default DescriptionField;