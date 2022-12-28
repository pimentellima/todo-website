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
    border: ${({theme}) => theme.colors.border.default};
    background-color: ${({theme}) => theme.colors.blue.default};
    color: ${({theme}) => theme.colors.white};
    font-size: ${({theme}) => theme.fontSizes.large};
    border-radius: ${({theme}) => theme.borderRadius.medium};
    min-width: 200px;
    height: 40px;
    padding: 0 20px 0 20px;
    text-align: center;
    margin-left: 25px;
    transition: ${({theme}) => theme.transitions.buttonHover};

    :hover {
        background-color: ${({theme}) => theme.colors.blue.dark};
        cursor: pointer;
    }   
`

export const TextInput = styled.input`
    color: ${({theme}) => theme.colors.textColor};

    background-color: #ecf1f8;
    font-size: 16px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    font-weight: 600;
    padding: 0 10px;
    margin-bottom: 10px;
    text-indent: 14px;
`