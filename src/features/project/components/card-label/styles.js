import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`

export const Header = styled.header`
    display: flex;
    color: #92a5b3;
    font-size: 13px;
    margin-bottom: 2px;
`

export const Label = styled.label`
    margin-left: 5px;
    align-self: flex-end;
    font-size: 10px;
    color: #48626f;
`

export const Span = styled.span`
    text-indent: 20px;
    cursor: pointer;
    font-size: 11px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`
