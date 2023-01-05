import React from "react";
import SignupForm from './signup-form/signup-form'
import Header from '../../components/header'
import FooterLink from '../../components/footer-link'
import SignContainer from '../../components/sign-container'

const SignupPage = () => {

    return (
        <SignContainer>
            <Header>
                To do app
            </Header>
            <SignupForm/>
            <FooterLink link='/login' label={'Fazer login'}>
                Já é cadastrado?
            </FooterLink>
        </SignContainer>
    )
}

export default SignupPage;