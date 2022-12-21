import React from "react";

import { SignupForm } from '../features/authentication/index'
import Header from '../components/header/header'
import SignContainer from '../components/sign-container/signContainer'
import FooterLink from "../components/footer-link/footerLink";

const Signup = () => {

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

export default Signup;