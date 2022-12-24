import React from "react";

import SignContainer from '../ui/sign-container/sign-container'
import SignupForm from '../components/signup-form/signup-form'
import Header from '../ui/header/header'
import FooterLink from '../ui/footer-link/footer-link'

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