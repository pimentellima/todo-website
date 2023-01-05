import React from "react";
import LoginForm from './login-form'
import Header from '../../components/header'
import FooterLink from '../../components/footer-link'
import PageWrapper from '../../components/page-wrapper'

const LoginPage = () => {
    return (
        <PageWrapper>
            <Header>
                To do app
            </Header>
            <LoginForm/>
            <FooterLink link='/signup' label={'Cadastrar-se'}>
                Ainda não tem uma conta?
            </FooterLink>
        </PageWrapper>
    )
};

export default LoginPage;