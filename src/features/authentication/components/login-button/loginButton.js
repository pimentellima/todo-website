import React from "react";

import * as S from './styles'

const LoginButton = ({ children }) => {

    return(
        <S.Button>
            {children}
        </S.Button>
    )
}

export default LoginButton;