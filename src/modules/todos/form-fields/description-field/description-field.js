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
                name='description'
                type='text'
                placeholder='Digite aqui ...'
                value={value}
                onChange={e => onChange(e)}
                />
        </div>
    )
}

export default DescriptionField;