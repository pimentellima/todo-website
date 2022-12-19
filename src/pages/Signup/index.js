import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as C from './styles'

import { IoIosArrowForward } from "react-icons/io";

import { Input } from '../../components/input/styles';

import { UserContext } from "../../contexts/UserContext";

const Signup = () => {
    const [usernameError, setUsernameError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')

    const { signup } = useContext(UserContext)
    
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
        <C.Container>
        <C.Header>mathasks</C.Header>
        <C.Form onSubmit={(e => handleSignup(e))}>
            <C.TitleLabel>Criar conta</C.TitleLabel>
            <Input
                ref={userRef} 
                onChange={() => setUsernameError('')}
                placeholder={'nome de usuário'}
                isInvalid={!!usernameError}
                type='username'/>
            <C.LabelError>{usernameError}</C.LabelError>
            <Input
                ref={passwordRef} 
                onChange={() => setPasswordError('')}
                placeholder={'senha'}
                isInvalid={!!passwordError}
                type='password'/>
            <C.LabelError>{passwordError}</C.LabelError> 
            <Input
                ref={confirmPasswordRef} 
                onChange={() => setConfirmPasswordError('')}
                placeholder={'confirme a senha'}
                isInvalid={!!confirmPasswordError}
                type='password'/>
            <C.LabelError>{confirmPasswordError}</C.LabelError>
            <C.Button onClick={e => handleSignup(e)}>Cadastrar-se<IoIosArrowForward/></C.Button>
        </C.Form>
        <C.SignupLabel>
            Já é cadastrado?
            <Link to='/signin'>Fazer login</Link>
        </C.SignupLabel>
    </C.Container>
    )
}

export default Signup;