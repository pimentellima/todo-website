import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Container } from './styles'

import { UserContext } from '../../contexts/UserContext';

import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { RxLockClosed } from 'react-icons/rx'


const Signin = () => {
    const [error, setError] = useState('')
    const { signin } = useContext(UserContext)
    const navigate = useNavigate()

    const userRef = useRef()
    const passwordRef = useRef()

    useEffect(() => {
    })

    const handleLogin = (e) => {
        e.preventDefault()
        const username = userRef.current.value
        const password = passwordRef.current.value
        const error = signin(username, password)
        userRef.current.value = null
        passwordRef.current.value = null

        if(error) {
            setError(error)
            return
        }
            
        else {
            setError('')
            navigate('/user')
        }
    }

    return (
        <Container>
            <header>
                <p className="logo">mathasks</p>
            </header>
            <div className="center-section">
                <form className="login">
                    <p className='main-text'>Entre na sua conta</p>
                    <div className="input-boxes">
                        <div className='label'>
                            <div className="icon">
                                <AiOutlineUser/>
                            </div>
                            <input ref={userRef} placeholder='nome de usuário'></input>
                        </div>
                        <div className='label'>
                            <div className="icon">
                                <RxLockClosed/>
                            </div>
                            <input ref={passwordRef} type="password"placeholder='senha'/>
                        </div>
                    </div>
                    <div className="login-button">
                        <button onClick={e => handleLogin(e)}>Entrar<IoIosArrowForward/></button>
                    </div>
                </form>
                <div className='error'>{error}</div>
                <div className="signup">
                    <Link to='/signup'>
                        <p>Cadastrar-se</p>
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default Signin;