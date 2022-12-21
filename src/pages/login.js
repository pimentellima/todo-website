import React from "react";

import { LoginForm } from '../features/authentication/index'
import Header from '../components/header/header'
import SignContainer from '../components/sign-container/signContainer'
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