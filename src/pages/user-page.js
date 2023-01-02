import React from 'react';
import { DragTodoProvider } from '../context/drag-todo-context';
import { TodosBoard } from '../modules/todos/index';
import { LogoutButton } from '../modules/auth/index';
import Header from '../shared-components/header/header';

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