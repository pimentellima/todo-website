import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    padding: 30px 10px;
    overflow-x: scroll;
    height: calc(100vh - 80px);

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

    ::-webkit-scrollbar-thumb:active {
        background: rgba(0,0,0,0.2);
    }
`

export const CreateSectionButton = styled.button`
    min-width: 200px;
    height: 40px;
    background-color: #3b5bfd;    
    padding: 0 20px 0 20px;
    text-align: center;
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    font-size: 18px;    
    color: white;
    margin-left: 25px;

    :hover {
        cursor: pointer;
        opacity: 90%;
    }   
`

export const TextInput = styled.input`
    border: none;
    background-color: #ecf1f8;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    font-weight: 600;
    font-size: 16px;
    padding: 0 10px;
    margin-bottom: 10px;
    color: #101820;
    text-indent: 14px;
`