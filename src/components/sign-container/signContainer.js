import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    align-items: center;
    justify-content: center;
    width: 100%;
`

const SignContainer = ({ children }) => {
    return(
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}

export default SignContainer;

