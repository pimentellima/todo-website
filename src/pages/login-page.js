import React from "react";
import SignContainer from '../components/sign-container/sign-container'
import { LoginForm } from '../modules/auth/index'
import Header from '../components/header/header'
import FooterLink from '../components/footer-link/footer-link'

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