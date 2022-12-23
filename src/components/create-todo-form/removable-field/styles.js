import styled, { css} from "styled-components";

export const Label = styled.label`
    display: flex;
    color: #101820;
    font-size: 15px;
    margin: 12px 0 8px 0;

    :hover >:nth-child(1) {
        visibility: visible; 

        :hover {
            cursor:pointer
        }
    }
`

export const Container = styled.div`
  
`

export const MenuButton = styled.button`
    margin-left: auto;
    color: #101820;
    padding: 4px;
    font-size: 14px;
    border: none;
    border-radius: 8px;
    background-color: white;
    transition: background-color 0.1s ease-out;
    visibility: hidden;

    :hover {
        background-color: #e8f2fa;
        cursor: pointer;
    }

    ${props => props.active && 
        css`
            background-color: #e8f2fa;
            visibility: visible;
        `
    }
`

export const MenuContent = styled.div`
    padding: 4px 8px;
    border: 1px solid #c0d0e6;
    border-radius: 3px;
    background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-top: 10px;
`

export const RemoveButton = styled.button` 
    padding: 7px 20px;
    border: none;
    width: 150px;
    border-radius: 4px;
    background-color: white;
    transition: background-color 0.1s ease-out, color 0.1s ease-out;

    :hover {
        background-color: #e8f2fa;
        cursor: pointer;
        color: #3b5bfd;
    }
`

