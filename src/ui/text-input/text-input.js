import React from 'react';

import * as S from './styles';

const TextInput = ({ inputRef, onChange, placeholder, isInvalid, type, error }) => {

    return(
        <>
            <S.Input
                ref={inputRef}
                onChange={onChange}
                placeholder={placeholder}
                isInvalid={isInvalid}
                type={type}
            />
            <S.Error>{error}</S.Error>
        </>
    )
}

export default TextInput;