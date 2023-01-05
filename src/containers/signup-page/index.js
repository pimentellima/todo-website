import React from "react";
import SignupForm from "./signup-form";
import Header from '../../components/header'
import FooterLink from '../../components/footer-link'
import PageWrapper from '../../components/page-wrapper'

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