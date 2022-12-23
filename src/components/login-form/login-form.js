import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

import * as S from './styles'

import TextField from '../text-field/text-field'
import SignButton from '../sign-button/sign-button'

import { useUserAuth } from "../../hooks/use-user-auth";
import { useUserData } from '../../hooks/use-user-data';

const LoginForm = () => {
    const [usernameError, setUsernameError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const { login } = useUserAuth()
    const { user } = useUserData()

    const navigate = useNavigate()

    const userRef = useRef()
    const passwordRef = useRef()

    useEffect(() => {
        if(user) navigate('/user')
    }, [user])

    const handleLogin = (e) => {
        e.preventDefault()

        const username = userRef.current.value
        const password = passwordRef.current.value

        setUsernameError('')
        setPasswordError('')

        if (!username) setUsernameError('Não pode ser vazio')
        if (!password) setPasswordError('Não pode ser vazio')
        if(!password || !username) return

        const error = login(username, password)

        if(error) {
            setUsernameError(error);
            return;
        }
        navigate('/user')
    }

    return (
        <S.Form onSubmit={(e) => handleLogin(e)}>
            Entre na sua conta
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
            <SignButton onClick={e => handleLogin(e)}>
                Entrar
            </SignButton>
        </S.Form>
    );
};

export default LoginForm;