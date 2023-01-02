import React from 'react';

import * as S from './styles';

const TextInput = (props) => {
    const { label, value, type, placeholder, errorMessage, onChange } = props;

    return(
        <>
            <S.Input
                name={label}
                value={value}
                type={type}
                placeholder={placeholder}
                onChange={e => onChange(label, e.target.value)}
                isInvalid={!!errorMessage}
            />
            <S.Error>{errorMessage}</S.Error>
        </>
    )
}

export default TextInput;