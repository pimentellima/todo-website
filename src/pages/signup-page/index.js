import React from 'react';
import FooterLink from '../../components/footer-link';
import Header from '../../components/header';
import PageWrapper from '../../components/page-wrapper';
import SignupForm from './signup-form/index';

const SignupPage = () => {
    return (
        <PageWrapper>
            <Header>
                To do app
            </Header>
            <SignupForm/>
            <FooterLink link='/login' label={'Fazer login'}>
                Já é cadastrado?
            </FooterLink>
        </PageWrapper>
    )
}

export default SignupPage;