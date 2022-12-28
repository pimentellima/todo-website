import React from "react";

import SignContainer from '../ui/sign-container/sign-container'
import LoginForm from '../modules/auth/login-form/login-form'
import Header from '../ui/header/header'
import FooterLink from '../ui/footer-link/footer-link'

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
}

export default LoginPage;