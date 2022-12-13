import styled from 'styled-components';

export const PopupButton = styled.button`
    width: 30px;
    height: 30px;
    background-color: #3b5bfd;
    border-radius: 20px;
    border: 0;
    color: white;
    text-align: center;
    font-size: 20px;
    transition: opacity 0.15s linear;

    :hover {
        opacity: 85%;
        cursor: pointer;
    }
`
export const SectionHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    font-weight: 600;
    font-size: 18px;
    padding: 0 10px;
    margin-bottom: 10px;
    color: #101820;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 0 300px;
    border-left: 1px solid rgba(0, 0, 0, 0.05);
    padding: 0 15px;
`