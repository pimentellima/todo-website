import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import * as C from './styles'

import { UserContext } from '../../contexts/UserContext';

import { IoIosArrowForward } from "react-icons/io";

import { Input } from '../../components/input/styles';

const Signin = () => {
    const [usernameError, setUsernameError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const { signin, user } = useContext(UserContext)
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

        const error = signin(username, password)

        if(error) {
            setUsernameError(error);
            return;
        }
        navigate('/user')
    }

    return (
        <C.Container>
            <C.Header>mathasks</C.Header>
            <C.Form onSubmit={(e) => handleLogin(e)}>
                <C.TitleLabel>Entre na sua conta</C.TitleLabel>
                <Input
                    ref={userRef} 
                    onChange={() => setUsernameError('')}
                    placeholder={'nome de usuário'}
                    isInvalid={!!usernameError}
                    type='username'
                />
                <C.LabelError>{usernameError}</C.LabelError>
                <Input
                    ref={passwordRef} 
                    onChange={() => setPasswordError('')}
                    placeholder={'senha'}
                    isInvalid={!!passwordError}
                    type='password'
                />
                <C.LabelError>{passwordError}</C.LabelError>
                <C.Button onClick={e => handleLogin(e)}>Entrar<IoIosArrowForward/></C.Button>
            </C.Form>
            <C.SignupLabel>
                Ainda não tem uma conta?
                <Link to='/signup'>Cadastrar-se</Link>
            </C.SignupLabel>
        </C.Container>
    );
};

export default Signin;