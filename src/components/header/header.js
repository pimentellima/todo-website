import React from "react";

import * as S from './styles'

const Header = ({ children }) => {

    return(
        <S.Header>
            mathasks
            {children}
        </S.Header>
    )
}

export default Header;