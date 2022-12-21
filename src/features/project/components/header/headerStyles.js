import styled from "styled-components";

export const StyledHeader = styled.header`
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

export const Button = styled.button`
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
    }   
`