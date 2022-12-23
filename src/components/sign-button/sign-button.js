import React from "react";

import * as S from './styles'

const SignButton = ({ children }) => {

    return(
        <S.Button>
            {children}
        </S.Button>
    )
}

export default SignButton;