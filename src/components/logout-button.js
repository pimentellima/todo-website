import React from "react"
import styled from "styled-components";

const LogoutButton = ({ onClick }) => {
    return(
        <StyledButton onClick={(e) => onClick(e)}>
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