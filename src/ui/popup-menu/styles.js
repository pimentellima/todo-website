import styled from "styled-components";

export const PopupButton = styled.button`
    color: #101820;
    padding: 4px;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    transition: background-color 0.1s ease-out;
    background: inherit;

    :hover {
        cursor: pointer;
    }

`

export const MenuContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3px 7px;
    border: 1px solid #c0d0e6;
    border-radius: 3px;
    background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-top: 10px;
`

export const OptionButton = styled.button` 
    padding: 7px 20px;
    border: none;
    width: 150px;
    font-size: 13px;
    border-radius: 2px;
    background-color: white;
    transition: background-color 0.1s ease-out, color 0.1s ease-out;

    :hover {
        background-color: #e8f2fa;
        cursor: pointer;
        color: #3b5bfd;
    }
`

