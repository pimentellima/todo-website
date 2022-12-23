import React from "react";

import SignContainer from '../components/sign-container/sign-container'
import SignupForm from '../components/signup-form/signup-form'
import Header from '../components/header/header'
import FooterLink from '../components/footer-link/footer-link'

const SignupPage = () => {

    return (
        <SignContainer>
            <Header>
                mathasks
            </Header>
            <SignupForm/>
            <FooterLink link='/ligin' label={'Fazer login'}>
                Já é cadastrado?
            </FooterLink>
        </SignContainer>
    )
}

export default SignupPage;