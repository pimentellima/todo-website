import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    font-size: 25px;
    letter-spacing: -1px;
    color: #101820;
    font-weight: 600;
    height: 76px;
    background-color: white;
`

export const LabelError = styled.label`
    display: flex;
    text-align: start;
    font-size: 12px;
    color: #e04a31;
`

export const Button = styled.button`
    background-color: #3b5bfd;
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 5px;
    color: white;
    margin-top: 35px;
    font-size: 18px;    

    :hover {
        cursor: pointer;
    }   
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 30px;
    margin-top: 38px;
    width: 400px;
    border-radius: 5px;
    background-color: white;
`

export const SignupLabel = styled.label`
    margin-top: 20px;
    font-size: 15px;
    color: #849aac;

    a {
        text-decoration: none;
        margin-left: 5px;
        color: #3b5bfd;
    }
`

export const TitleLabel = styled.label`
    color: #293e52;
    font-size: 22px;
    margin-bottom: 25px;
`


