import React from 'react';
import { useNavigate } from 'react-router';
import Header from '../../components/header';
import LogoutButton from '../../components/logout-button';
import Board from './board';
import { DragTodoProvider } from './drag-todo-context';

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