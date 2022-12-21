import React from "react";

import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    width: 100%;
    height: 76px;
    padding: 0 10px 0 10px;
    align-items: center;
    font-size: 20px;
    letter-spacing: -1px;
    color: #101820;
    font-weight: 600;
    background-color: white;

`
const Header = () => {

    return(
        <StyledHeader>
            mathasks
        </StyledHeader>
    )
}

export default Header;