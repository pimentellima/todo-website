import styled, { css } from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 540px;
    padding: 30px;
    border-radius: 5px;
    background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    z-index: 9999;
`

export const Title = styled.p`
    font-size: 20px;
    margin-bottom: 18px;
    padding-bottom: 18px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`

export const TextField = styled.input`
    width: 100%;
    font-size: 16px;
    padding: 13px 10px;
    border: 1px solid #eef2f8;
    border-radius: 4px;
    background-color: #eef2f8;
    transition: border-color 0.15s ease-out ;

    ${props => props.isInvalid ? 
        css`
            border-color: #f00 ;
        `
        :
        css`
            :hover, :focus, :active {
                border-color: #3b5bfd;
            }
        `
    }

    :hover, :focus, :active {
        background-color: white;
    }
    
    ::placeholder {
        font-size: 15px;
        color: #849aac; 
    }
`

export const Error = styled.p`
    display: flex;
    text-align: start;
    font-size: 12px;
    color: #e04a31;
`

export const Label = styled.label`
    display: flex;
    color: #101820;
    font-size: 15px;
    margin: 12px 0 8px 0;

    :hover >:nth-child(1) {
        visibility: visible; 
    }
`

export const Select = styled.select`
    border-color: #c0d0e6;
    border-radius: 6px;
    height: 50px;
    font-size: 15px;
    text-indent: 7px;
    transition: border-color 0.1s ease-out;
    color: #849aac;
    width: 100%;
    
    :hover, :active {
        background-color: white;
        border-color: #3b5bfd;
        cursor: pointer;
    }
`

export const AddFieldsSection = styled.section`
    display: flex;
    margin-top: 15px;
    gap: 6px;
`

export const AddButton = styled.button`
    padding: 4px 6px;
    text-align: center;
    background-color: white;
    border: 1px solid #c0d0e6;
    border-radius: 8px;
    color: #849aac;
    font-size: 15px;
    transition: border-color 0.1s ease-out, color 0.1s ease-out;

    :hover {
        border-color: #3b5bfd;
        color: #3b5bfd;
        cursor: pointer;
    }
`


export const SubmitButton = styled.button`
    height: 45px;
    width: 100%;
    background-color: #3b5bfd;
    border: none;
    padding: 4px;
    border-radius: 3px;
    color: white;
    font-size: 16px;
    transition: opacity 0.15s linear;
    margin-top: 25px;

    :hover {
        opacity: 85%;
        cursor: pointer;
    }
`
export const HideScreen  = styled.div`
    position: fixed;
    top:0; 
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(119,126,131, 0.5);
    z-index: -999;
`


