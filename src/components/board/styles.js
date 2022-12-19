import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
`

export const SectionsContent = styled.div`
    padding: 30px 10px;
    width: 100vw;
    display: flex;
    height: calc(100vh - 90px);
    overflow-x: scroll;
`

export const Header = styled.div`
    width: 100%;
    height: 76px;
    display: flex;
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
export const HideScreen  = styled.div`
    position: relative;
    top:0; 
    left: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgb(119,126,131, 0.5);
    z-index: -999;
`

export const CardMenuContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 540px;
    padding: 30px;
    border-radius: 5px;
    background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    z-index: 999999;

    p {
        color: #101820;
        font-size: 22px;
        margin-bottom: 30px ;
    }
`