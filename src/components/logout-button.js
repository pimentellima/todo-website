import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const LogoutButton = () => {
    const navigate = useNavigate();
    
    const handleLogout = e => {
        e.preventDefault();
        localStorage.removeItem('userToken');
        navigate('/login');
    };

    return(
        <StyledButton 
            onClick={(e) => handleLogout(e)}
            >
            Sair
        </StyledButton>
    )
};

const StyledButton = styled.button`
    background-color: #3b5bfd;
    margin-left: auto;
    width: 100px;
    height: 50px;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 18px;    
    
    :hover {
        cursor: pointer;
        opacity: 90%;
    }
`

export default LogoutButton;