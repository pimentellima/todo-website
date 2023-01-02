import React from 'react';
import { useNavigate } from 'react-router';
import { DragTodoProvider } from '../context/drag-todo-context'
import { TodosBoard } from '../modules/todos/index';
import { LogoutButton } from '../modules/auth/index'
import Header from '../shared-components/header/header'

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
                <LogoutButton onClick={(e) => handleLogout(e)}>Sair</LogoutButton>
            </Header>
            <TodosBoard/>
        </DragTodoProvider>
    );
};

export default UserPage;