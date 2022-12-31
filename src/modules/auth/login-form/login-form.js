import React from 'react';
import { useNavigate } from "react-router-dom";
import SignForm from '../../../components/sign-form/sign-form';
import SignButton from '../../../components/sign-button/sign-button';
import LoginFormConfig from '../../../config/login-form-config';
import TextInput from '../../../components/text-input/text-input';
import { useForm } from '../../../hooks/use-form';
import { useCurrentUser } from '../../../hooks/use-current-user';

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
        const username = data.username.value;
        const storage = JSON.parse(localStorage.getItem("users"));
        const user = storage && storage.find((user) => user.name === username);
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