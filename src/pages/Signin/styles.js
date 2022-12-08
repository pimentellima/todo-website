import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    
    header {
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
    }
    
    .center-section {
        display: flex;
        flex-direction: column;
        margin-top: 36px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .signup {
        padding-top: 30px;
    }
    
    .login {
        p {
            font-size: 23px;
        }

        display: flex;
        flex-direction: column;
        padding: 30px;
        width: 400px;
        border-radius: 5px;
        background-color: white;
    }

    .input-boxes {
        display: flex;
        flex-direction: column;
        margin: 38px 0 50px 0;
        gap: 10px;
    }
    
    .label {
        display: flex;
        
        .icon {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 10%;
            background-color: #ecf1f8;
        }
        
        input {
            padding-left: 10px;
            border: none;
            width: 100%;
            height: 50px;
        }

        input::placeholder {
            color: #c0d0e6;
            font-size: 15px;
        }
        border: 1px solid #ecf1f8;
        border-radius: 2px;
    }

    .login-button {
        height: 50px;
    }
    
    button {
            background-color: #3b5bfd;
            width: 100%;
            height: 100%;
            border: none;
            border-radius: 5px;
            color: white;
            font-size: 18px;    

            :hover {
                cursor: pointer;
            }
        }
        
`