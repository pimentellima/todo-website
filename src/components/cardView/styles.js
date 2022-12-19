import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: bold;
    width: 300px;
    padding: 20px;
    border-radius: 5px;
    background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    z-index: 999999;
`

export const Form = styled.form`
    font-weight: normal;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`
export const Label = styled.label`
    display: flex;
    color: #101820;
    font-size: 15px;
    margin: 10px 0 4px 0;

    :hover >:nth-child(1) {
        visibility: visible; 
    }
`

export const Button = styled.button`
    display: flex;
    border: none;
    background-color: white;
    padding-left: 10px;
    font-size: 15px;
    visibility: hidden;

    :hover {
        cursor: pointer;
    }
`

export const Field = styled.div`
    display: flex;
    flex-direction: column;
`

export const Text = styled.p`
    padding: 13px 10px;
    font-size: 16px;
    color: #60737d;
`