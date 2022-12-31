import React from "react";
import * as S from './styles'
import TextInput from "../../../../components/text-input/text-input";

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