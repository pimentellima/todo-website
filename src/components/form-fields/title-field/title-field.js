import React from "react";
import * as S from './styles'

const TitleField = (props) => {
    const { value, error, handleChange } = props;
    
    return ( 
        <div>
            <S.Label>*Título da tarefa</S.Label>
            <S.Input    
                type='text'
                placeholder='Digite aqui ...'
                isInvalid={!!error}
                value={value}
                onChange={e => handleChange(e.target.value, 'title')}
                />
            <S.Error>{error}</S.Error>
        </div>
    )
}

export default TitleField;