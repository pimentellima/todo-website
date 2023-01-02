import React from 'react';

import * as S from './styles'

const SignForm = ({ children, onSubmit }) => {
    
    return (
        <S.StyledForm autoComplete='off' onSubmit={onSubmit}>
            {children}
        </S.StyledForm>
    )
};

export default SignForm;
