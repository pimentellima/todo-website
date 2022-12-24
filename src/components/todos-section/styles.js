import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 0 300px;
    padding: 0 15px;
    border-right: 1px solid rgba(0, 0, 0, 0.05);    
`

export const Content = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: calc(100% - 30px);
    border: 1px solid rgba(0, 0, 0, 0.03);
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.01);

    ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
     }

    -webkit-scrollbar-track {
        border-radius: 10px;
        background: rgba(0,0,0,0.1);
    }

    ::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background: rgba(0,0,0,0.2);
    }

    ::-webkit-scrollbar-thumb:hover{
        background: rgba(0,0,0,0.4);
    }

    ::-webkit-scrollbar-thumb:active{
        background: rgba(0,0,0,0.2);
    }
`


export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 35px;
    font-weight: 600;
    font-size: 16px;
    padding: 0 10px;
    margin-bottom: 10px;
    color: #101820;
`

export const Title = styled.p`
`



