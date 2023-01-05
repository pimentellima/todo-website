import React from "react";
import LoginForm from './login-form/login-form'
import Header from '../../components/header'
import FooterLink from '../../components/footer-link'
import SignContainer from '../../components/sign-container'

const LoginPage = () => {
    return (
        <SignContainer>
            <Header>
                To do app
            </Header>
            <LoginForm/>
            <FooterLink link='/signup' label={'Cadastrar-se'}>
                Ainda não tem uma conta?
            </FooterLink>
        </SignContainer>
    )
};

export default LoginPage;