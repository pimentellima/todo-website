import React from "react";
import * as S from './styles'
import PopupMenu from '../../../../components/popup-menu/popup-menu'
import TextInput from "../../../../components/text-input/text-input";

const DescriptionField = (props) => {
    const  { value, hidden, onChange, handleHide } = props;

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
            <TextInput    
                label='description'
                type='text'
                placeholder='Digite aqui ...'
                value={value}
                onChange={onChange}
                />
        </div>
    )
}

export default DescriptionField;