import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
`

export const Content = styled.div`
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
    font-size: 25px;
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