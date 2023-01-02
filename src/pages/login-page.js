import React from "react";
import { LoginForm, FooterLink, SignContainer } from '../modules/auth/index'
import Header from '../shared-components/header/header'

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