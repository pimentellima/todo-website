import React from "react";

import { SignupForm, SignContainer, Header } from '../features/authentication/index'
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