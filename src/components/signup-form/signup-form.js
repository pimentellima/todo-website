import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import TextInput from '../../ui/text-input/text-input'
import SignButton from '../../ui/sign-button/sign-button'

import SignForm from '../../ui/sign-form/sign-form'

import { useCurrentUser } from '../../hooks/use-current-user';

const SignupForm = () => {
    const [usernameError, setUsernameError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')

    const { signup } = useCurrentUser()
    
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
        <SignForm onSubmit={(e => handleSignup(e))}>
            Criar conta
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
            <TextInput
                inputRef={confirmPasswordRef} 
                onChange={() => setConfirmPasswordError('')}
                placeholder={'confirme a senha'}
                isInvalid={!!confirmPasswordError}
                type='password'
                error={confirmPasswordError}
                />
            <SignButton onClick={e => handleSignup(e)}>
                Cadastrar-se
            </SignButton>
        </SignForm>
    )
}

export default SignupForm;