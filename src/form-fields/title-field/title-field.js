import React from "react";
import * as S from './styles'
import TextInput from '../../ui/text-input/text-input'

const TitleField = (props) => {
    const { value, error, handleChange } = props;
    
    return ( 
        <div>
            <S.Label htmlFor="">*Título da tarefa</S.Label>
            <TextInput    
                type='text'
                placeholder='Digite aqui ...'
                isInvalid={!!error}
                value={value}
                onChange={e => handleChange(e.target.value, 'title')}
                error={error}
                />
        </div>
    )
}

export default TitleField;