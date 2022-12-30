import React from 'react';
import { useNavigate } from "react-router-dom";
import SignForm from '../../../ui/sign-form/sign-form';
import SignButton from '../../../ui/sign-button/sign-button';
import LoginFormConfig from '../../../config/login-form-config';
import TextInput from '../../../ui/text-input/text-input';
import { useForm } from '../../../hooks/use-form';
import { useAuth } from '../../../hooks/use-auth';
import getUser from '../../../utils//get-user'

const LoginForm = () => {
    const navigate = useNavigate();
    const { setCurrentUser } = useAuth();
    const {
        fields,
        handleChange,
        handleSubmit,
    } = useForm(
            LoginFormConfig, 
            data => onSubmit(data)
        );
    const onSubmit = (data) => {
        const user = getUser(data.username.value);
        localStorage.setItem("userLoggedIn", JSON.stringify(user));
        setCurrentUser(user);
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