import React from "react";
import * as S from './styles'
import PopupMenu from '../../ui/popup-menu/popup-menu'

const DescriptionField = (props) => {
    const  { value, hidden, handleChange, handleHide } = props;

    return ( 
        <div hidden={hidden}>
            <S.Label htmlFor=''>
                Descrição
                <PopupMenu 
                    position='bottom right'
                    options={[
                        {
                            label: 'Remover campo', 
                            handler: () => handleHide('description', true)
                        }]}
                    />
            </S.Label>
            <S.Input    
                type='text'
                placeholder='Digite aqui ...'
                value={value}
                onChange={e => handleChange(e.target.value, 'description')}
                />
        </div>
    )
}

export default DescriptionField;