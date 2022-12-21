import React from "react";

import { LoginForm, SignContainer, Header } from '../features/authentication/index'
import FooterLink from "../components/footer-link/footerLink";

const Login = () => {

    return (
        <SignContainer>
            <Header/>
            <LoginForm/>
            <FooterLink link='/signup' label={'Cadastrar-se'}>
                Ainda não tem uma conta?
            </FooterLink>
        </SignContainer>
    )
}

export default Login;