import React from "react";
import * as S from './styles'
import TextInput from "../../../../shared-components/text-input/text-input";
import { HideFieldMenu } from "../hide-field-menu";

const DescriptionField = (props) => {
    const { value, hidden, onChange, onHide } = props;

    return ( 
        <div hidden={hidden}>
            <S.Label htmlFor=''>
                Descrição
                <HideFieldMenu
                    label='description'
                    onHide={onHide}
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