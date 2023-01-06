import styled from 'styled-components';

export const Wrapper = styled.div`
    border-right: 1px solid ${({ theme }) => theme.colors.border.dark};
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 0 15px;
`

export const Content = styled.div`
    border-right: 1px solid ${({ theme }) => theme.colors.border.default};
    background-color: ${({ theme }) => theme.colors.grey.default};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    padding: 10px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: calc(100% - 30px);

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

export const ModalButton = styled.button`
    background-color: ${({ theme }) => theme.colors.blue.default};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    color: ${({ theme }) => theme.colors.white};
    transition: ${({ theme }) => theme.transitions.buttonHover};
    border: none;
    width: 26px;
    height: 26px;
    font-size: ${({ theme }) => theme.fontSizes.veryLarge};
    
    :hover {
        background-color: ${({theme}) => theme.colors.blue.dark};
        cursor: pointer;
    }   
`

