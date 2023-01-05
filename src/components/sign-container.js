import React from "react";
import styled from "styled-components";

const SignContainer = ({ children }) => {
    return(
        <Content>
            {children}
        </Content>
    )
};

const Content = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export default SignContainer;

