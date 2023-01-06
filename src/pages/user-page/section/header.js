import React from "react";
import styled from "styled-components";

const Header = ({ title, length, children }) => {
    return (
        <Wrapper>
            <Title>{title}</Title> {'(' + length + ')'}
            <ButtonsWrapper>
                {children}
            </ButtonsWrapper>
        </Wrapper>
    )
};

const Wrapper = styled.header`
    color: ${({ theme }) => theme.colors.fontColors.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 35px;
    font-weight: 600;
    font-size: 16px;
    padding: 0 10px;
    margin-bottom: 10px;
`

const ButtonsWrapper = styled.div`
    display: flex;
    gap: 10px;
`

const Title = styled.p`
    width: 65%;
    text-overflow: ellipsis;
    overflow: hidden;
`

export default Header;


