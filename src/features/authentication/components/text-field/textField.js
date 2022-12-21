import React from 'react';

import * as S from './textFieldStyles';

const TextField = ({ inputRef, onChange, placeholder, isInvalid, type }) => {

    return(
        <S.Input
            ref={inputRef}
            onChange={onChange}
            placeholder={placeholder}
            isInvalid={isInvalid}
            type={type}
        />
    )
}

export default TextField;