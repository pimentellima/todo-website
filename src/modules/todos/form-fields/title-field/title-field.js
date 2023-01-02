import React from "react";
import * as S from './styles'

const TitleField = (props) => {
    const { value, errorMessage, onChange } = props;
    
    return ( 
        <div>
            <S.Label htmlFor="">*Título da tarefa</S.Label>
            <S.Input    
                value={value}
                type='text'
                placeholder='Digite aqui ...'
                isInvalid={!!errorMessage}
                onChange={e => onChange('title', e.target.value)}
                />
            <S.Error>{errorMessage}</S.Error>
        </div>
    )
}

export default TitleField;