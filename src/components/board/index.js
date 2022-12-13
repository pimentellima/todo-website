import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";

import List from '../list'
import * as C from './styles'

import { SectionContext } from '../../contexts/SectionContext';
import { UserContext } from '../../contexts/UserContext';

const Board = () => {
    const { logout } = useContext(UserContext)
    const { sections } = useContext(SectionContext)
    const navigate = useNavigate()
    
    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    return (
        <C.Container>
            <C.Header>
                mathasks
                <C.Button onClick={handleLogout}>Sair</C.Button>
            </C.Header>
            <C.Content>
                {sections.map((content, index) => 
                    <List  
                        section={content.name} 
                        data={content.data} 
                        listIndex={index} 
                        key={index}/>)}
            </C.Content>
        </C.Container>
    );
};

export default Board;