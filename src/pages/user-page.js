import React from 'react';
import { DragTodoProvider } from '../context/drag-todo-context';
import TodosBoard from '../containers/todos-board/todos-board'
import LogoutButton from '../components/logout-button';
import Header from '../components/header';
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
            <TodosBoard/>
        </DragTodoProvider>
    );
};

export default UserPage;