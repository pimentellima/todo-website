import React from 'react';
import { DragTodoProvider } from './drag-todo-context';
import Board from './board'
import LogoutButton from '../../components/logout-button';
import Header from '../../components/header';
import { useNavigate } from 'react-router';

const UserPage = () => {
    const navigate = useNavigate();
    
    const handleLogout = e => {
        e.preventDefault();
        localStorage.removeItem('userToken');
        navigate('/login');
    };

    return (
        <DragTodoProvider>
            <Header>
                To do app             
                <LogoutButton onClick={e => handleLogout(e)}>
                    Sair
                </LogoutButton>
            </Header>
            <Board/>
        </DragTodoProvider>
    );
};

export default UserPage;