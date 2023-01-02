import React from "react";
import TextInput from "../../../../shared-components/text-input/text-input";
import * as S from './styles'

const TitleField = (props) => {
    const { value, errorMessage, onChange } = props;
    
    return ( 
        <div>
            <S.Label htmlFor="">*Título da tarefa</S.Label>
            <TextInput    
                label='title'
                value={value}
                type='text'
                placeholder='Digite aqui ...'
                isInvalid={!!errorMessage}
                onChange={onChange}
                errorMessage={errorMessage}
                />
        </div>
    )
}

export default TitleField;