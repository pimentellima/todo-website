import React from "react";

import * as S from './styles';

const LogoutButton = ({ onClick }) => {

    return(
        <S.Button onClick={onClick}>Sair</S.Button>
    )
}

export default LogoutButton;