import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Container } from './styles'
import { UserContext } from '../../contexts/UserContext';

const Header = () => {
    const { logout } = useContext(UserContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    return (
        <Container>
            <p>mathasks</p>
            <button onClick={handleLogout}>Sair</button>
        </Container>
    )
} 

export default Header;
