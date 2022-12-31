import React from "react";
import SignContainer from '../components/sign-container/sign-container'
import { SignupForm } from '../modules/auth/index'
import Header from '../components/header/header'
import FooterLink from '../components/footer-link/footer-link'

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