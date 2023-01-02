import React from 'react';
import { useNavigate } from "react-router-dom";
import SignForm from '../../ui/sign-form/sign-form';
import SignButton from '../../ui/sign-button/sign-button';
import LoginFormConfig from '../../login-form-config'
import TextInput from '../../../../shared-components/text-input/text-input';
import { useForm } from '../../../../shared-hooks/use-form'
import { useLogin } from '../../hooks/use-login'

const LoginForm = () => {
    const navigate = useNavigate();
    const login = useLogin();

    const {
        fields,
        handleChange,
        handleSubmit,
    } = useForm(
            LoginFormConfig, 
            (data) => onSubmit(data)
        );
        
    const onSubmit = (data) => {
        login(data.username.value);
        navigate("/user");
    };

    const { username, password } = fields;

    return (
        <SignForm onSubmit={(e) => handleSubmit(e)}>
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
        </SignForm>
    );
};

export default LoginForm;