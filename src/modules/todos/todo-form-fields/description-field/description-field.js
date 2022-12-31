import React from "react";
import * as S from './styles'
import TextInput from "../../../../components/text-input/text-input";
import { generateHideMenu } from "../generate-hide-menu";

const DescriptionField = (props) => {
    const { value, hidden, onChange, onHide } = props;

    return ( 
        <div hidden={hidden}>
            <S.Label htmlFor=''>
                Descrição
                {generateHideMenu('description', onHide)}
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