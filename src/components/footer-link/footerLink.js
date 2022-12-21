import React from "react";

import * as S from './footerLinkStyles'

const FooterLink = ({ children, link, label }) => {
    
    return(
        <S.Wrapper>
            {children}
            <S.StyledLink to={link}>
                {label}
            </S.StyledLink>
        </S.Wrapper>
    )
}

export default FooterLink;