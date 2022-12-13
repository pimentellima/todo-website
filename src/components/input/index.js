import React from "react";
import * as C from './styles'
import { AiOutlineUser } from "react-icons/ai";
import { RxLockClosed } from 'react-icons/rx'

const Input = ({ inputRef, handler, placeholder, isInvalid, type, error }) => {

    return(
        <C.Content isInvalid={isInvalid}>
                <C.InputIcon>
                    <Icon type={type}/>
                </C.InputIcon>
                <C.Input type={type} ref={inputRef} placeholder={placeholder} onChange={handler}/>
        </C.Content>
    )
}

const Icon = ({type}) => {
    if(type === 'username') return <AiOutlineUser/>
    if(type === 'password') return <RxLockClosed/>
}

export default Input;