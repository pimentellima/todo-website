import React from 'react';
import { useNavigate } from "react-router-dom";
import BlueButton from '../../../components/blue-button';
import TextInput from '../../../components/text-input';
import { useForm } from '../../../hooks/use-form';
import { useCurrentUser } from '../../user-page/use-current-user';
import login from './login';
import LoginFormConfig from './login-form-config';
import * as S from './styles';

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
            <BlueButton onClick={e => handleSubmit(e)}>
                Entrar
            </BlueButton>
        </S.Form>
    );
};

export default LoginForm;