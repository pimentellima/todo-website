import React from "react";
import { SignupForm, FooterLink, SignContainer } from '../modules/auth/index'
import Header from '../shared-components/header/header'

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