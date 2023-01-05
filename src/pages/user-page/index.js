import React from 'react';
import { DragTodoProvider } from './hooks/drag-todo-context';
import TodosBoard from './components/todos-board/todos-board'
import LogoutButton from '../../components/logout-button';
import Header from '../../components/header';

const UserPage = () => {
    return (
        <DragTodoProvider>
            <Header>
                To do app             
                <LogoutButton>Sair</LogoutButton>
            </Header>
            <TodosBoard/>
        </DragTodoProvider>
    );
};

export default UserPage;