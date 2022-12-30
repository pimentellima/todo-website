import React from 'react';
import { useNavigate } from 'react-router';
import { DragTodoProvider } from '../context/drag-todo-context'
import SectionsBoard from '../modules/todos/sections-board/sections-board';
import LogoutButton from '../ui/logout-button/logout-button'
import Header from '../ui/header/header'

const UserPage = () => {
    const navigate = useNavigate();
    
    const handleLogout = e => {
        e.preventDefault();
        localStorage.removeItem('userLoggedIn');
        navigate('/login');
    };

    return (
        <DragTodoProvider>
            <Header>
                To do app             
                <LogoutButton onClick={(e) => handleLogout(e)}>Sair</LogoutButton>
            </Header>
            <SectionsBoard/>
        </DragTodoProvider>
    );
};

export default UserPage;