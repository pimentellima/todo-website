import React, { useContext, useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Container } from './styles'

import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { RxLockClosed } from 'react-icons/rx'

import { UserContext } from "../../contexts/UserContext";

const Signup = () => {
    const [error, setError] = useState('')
    const { signup } = useContext(UserContext)
    
    const navigate = useNavigate();
    const userRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    const handleSignup = (e) => {
        e.preventDefault()
        const username = userRef.current.value
        const password = passwordRef.current.value
        const confirmPassword = passwordConfirmRef.current.value
        const error = signup(username, password, confirmPassword)
        userRef.current.value = null
        passwordRef.current.value = null        
        passwordConfirmRef.current.value = null        

        if(error) {
            setError(error)
            return
        }
            
        else {
            setError('')
            navigate('/login')
        }
    }

    return (
        <>
        <Container>
            <header>
                <p className="logo">mathasks</p>
            </header>
            <div className="center-section">
                <form className="login">
                    <p className='main-text'>Cadastrar conta</p>
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
                            <input ref={passwordRef} type="password" placeholder='senha'/>
                        </div>
                        <div className='label'>
                            <div className="icon">
                                <RxLockClosed/>
                            </div>
                            <input ref={passwordConfirmRef} type="password" placeholder='confirme a senha'/>
                        </div>
                    </div>
                    <div className="login-button">
                        <Link to='/user'>
                            <button onClick={e => handleSignup(e)}>Cadastrar-se<IoIosArrowForward/></button>
                        </Link>
                    </div>
                </form>
                <div className='error'>{error}</div>
                <div className="signin">
                    <Link to='/signin'>
                        <p>Fazer login</p>
                    </Link>
                </div>
            </div>
        </Container>
        </>
    )
}

export default Signup;