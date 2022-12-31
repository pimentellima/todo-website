import React from "react";
import { useNavigate } from "react-router-dom";
import SignForm from '../../../components/sign-form/sign-form';
import TextInput from "../../../components/text-input/text-input";
import SignButton from '../../../components/sign-button/sign-button';
import { useForm } from "../../../hooks/use-form";
import addUser from "../../../utils/add-user";
import SignupFormConfig from "../../../config/signup-form-config"; 

const SignupForm = () => {
    const navigate = useNavigate();

    const { 
        fields, 
        handleChange, 
        handleSubmit 
    } = useForm(
            SignupFormConfig, 
            (data) => onSubmit(data)
        );

    const onSubmit = (data) => {
        addUser(data.username.value, data.password.value);
        navigate('/login');
    };

    const { username, password, confirmPassword } = fields;

    return (
        <SignForm onSubmit={(e => handleSubmit(e))}>
            Criar conta
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
            <TextInput 
                label='confirmPassword'
                value={confirmPassword.value}
                type='password'
                placeholder='Confirme a senha'
                errorMessage={confirmPassword.errorMessage}
                onChange={handleChange}
                />
            <SignButton onClick={e => handleSubmit(e)}>
                Cadastrar-se
            </SignButton>
        </SignForm>
    )
};

export default SignupForm;