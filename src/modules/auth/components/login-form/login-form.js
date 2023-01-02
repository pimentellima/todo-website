import React from 'react';
import { useNavigate } from "react-router-dom";
import * as S from './styles';
import SignButton from '../../ui/sign-button/sign-button';
import LoginFormConfig from '../../login-form-config'
import TextInput from '../../../../shared-components/text-input/text-input';
import { useForm } from '../../../../shared-hooks/use-form'
import login from '../../login';
import { useCurrentUser } from '../../../../shared-hooks/use-current-user'

const LoginForm = () => {
    const navigate = useNavigate();
    const { setCurrentUser } = useCurrentUser();

    const {
        fields,
        handleChange,
        handleSubmit,
    } = useForm(
            LoginFormConfig, 
            (data) => onSubmit(data)
        );
        
    const onSubmit = (data) => {
        const name = data.username.value;
        const user = JSON.parse(
            localStorage.getItem("users")).find(
                user => user.name === name
            );
        login(name);
        setCurrentUser(user)
        navigate("/user");
    };

    const { username, password } = fields;

    return (
        <S.Form onSubmit={(e) => handleSubmit(e)}>
            Entre na sua conta
            <TextInput 
                label='username'
                value={username.value}
                type='text'
                placeholder='Nome de usuário'
                errorMessage={username.errorMessage}
                onChange={handleChange}
                />
            <TextInput 
                label='password'
                value={password.value}
                type='password'
                placeholder='Senha'
                errorMessage={password.errorMessage}
                onChange={handleChange}
            />
            <SignButton onClick={e => handleSubmit(e)}>
                Entrar
            </SignButton>
        </S.Form>
    );
};

export default LoginForm;