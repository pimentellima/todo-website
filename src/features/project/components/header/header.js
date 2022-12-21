import React from "react";

import { useAuth } from "../../../../hooks/useAuth";

import * as S from './styles'

const Header = () => {

    const { logout } = useAuth()    

    return(
        <S.StyledHeader>
            mathasks
            <S.Button onClick={logout}>Sair</S.Button>
        </S.StyledHeader>
    )
}

export default Header;