import React from 'react';
import { DragTodoProvider } from '../../context/drag-todo-context';
import TodosBoard from './todos-board/todos-board'
import LogoutButton from '../../components/logout-button/logout-button';
import Header from '../../components/header/header';

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