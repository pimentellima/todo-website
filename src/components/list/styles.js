import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 0 360px;
    border-left: 1px solid rgba(0, 0, 0, 0.05);
    padding: 0 15px;
    opacity: ${ props => props.section == "Finalizadas" ? 0.6 : 1 };

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 40px;

        p {
            font-weight: 600;
            font-size: 18px;
            padding: 0 10px;
        }
    }

    button {
        width: 42px;
        height: 42px;
        background-color: #3b5bfd;
        border-radius: 20px;
        border: 0;
        color: white;
        text-align: center;
        font-size: 20px;

        :hover {
            opacity: 90%;
            cursor: pointer;
        }
    }

`