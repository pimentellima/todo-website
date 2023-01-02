import React from "react";
import { useNavigate } from "react-router";

import * as S from './styles';

const LogoutButton = () => {
    const navigate = useNavigate();
    
    const handleLogout = e => {
        e.preventDefault();
        localStorage.removeItem('userToken');
        navigate('/login');
    };

    return(
        <S.Button onClick={(e) => handleLogout(e)}>Sair</S.Button>
    )
}

export default LogoutButton;