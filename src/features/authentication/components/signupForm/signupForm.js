import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from './styles'

import TextField from "../text-field/textField";
import LoginButton from '../login-button/loginButton'

import { useAuth } from '../../../../hooks/useAuth';

const SignupForm = () => {
    const [usernameError, setUsernameError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')

    const { signup } = useAuth()
    
    const navigate = useNavigate();

    const userRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()

    const handleSignup = (e) => {
        e.preventDefault()
        const username = userRef.current.value
        const password = passwordRef.current.value
        const confirmPassword = confirmPasswordRef.current.value

        if (!username) setUsernameError('Não pode ser vazio')
        if (!password) setPasswordError('Não pode ser vazio')
        if (!confirmPassword) setConfirmPasswordError('Não pode ser vazio')
        if(!password || !username || !confirmPassword) return

        const error = signup(username, password)

        if(error) {
            setUsernameError(error);
            return;
        }
        navigate('/login')
    }

    return (
        <S.Form onSubmit={(e => handleSignup(e))}>
            Criar conta
            <TextField
                inputRef={userRef} 
                onChange={() => setUsernameError('')}
                placeholder={'nome de usuário'}
                isInvalid={!!usernameError}
                type='username'
                />
            <S.Error>{usernameError}</S.Error>
            <TextField
                inputRef={passwordRef} 
                onChange={() => setPasswordError('')}
                placeholder={'senha'}
                isInvalid={!!passwordError}
                type='password'
                />
            <S.Error>{passwordError}</S.Error> 
            <TextField
                inputRef={confirmPasswordRef} 
                onChange={() => setConfirmPasswordError('')}
                placeholder={'confirme a senha'}
                isInvalid={!!confirmPasswordError}
                type='password'
                />
            <S.Error>{confirmPasswordError}</S.Error>
            <LoginButton onClick={e => handleSignup(e)}>
                Cadastrar-se
            </LoginButton>
        </S.Form>
    )
}

export default SignupForm;