import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterLink = ({ children, link, label }) => {
    return (
        <Wrapper>
            {children}
            <StyledLink to={link}>
                {label}
            </StyledLink>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    font-size: 15px;
    color: #849aac;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    margin-left: 5px;
    color: #3b5bfd;
`

export default FooterLink;