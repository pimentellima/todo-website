import React from 'react';
import FooterLink from '../../components/footer-link';
import Header from '../../components/header';
import PageWrapper from '../../components/page-wrapper';
import LoginForm from './login-form';

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