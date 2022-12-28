import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

import SignForm from '../../../ui/sign-form/sign-form';
import TextInput from '../../../ui/text-input/text-input'
import SignButton from '../../../ui/sign-button/sign-button';

import { useCurrentUser } from '../../../hooks/use-current-user'

const LoginForm = () => {
    const [usernameError, setUsernameError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const { user, login } = useCurrentUser()

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
        <SignForm onSubmit={(e) => handleLogin(e)}>
            Entre na sua conta
            <TextInput
                inputRef={userRef} 
                onChange={() => setUsernameError('')}
                placeholder={'nome de usuário'}
                isInvalid={!!usernameError}
                type='username'
                error={usernameError}
            />
            <TextInput
                inputRef={passwordRef} 
                onChange={() => setPasswordError('')}
                placeholder={'senha'}
                isInvalid={!!passwordError}
                type='password'
                error={passwordError}
            />
            <SignButton onClick={e => handleLogin(e)}>
                Entrar
            </SignButton>
        </SignForm>
    );
};

export default LoginForm;