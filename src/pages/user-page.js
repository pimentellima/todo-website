import React from 'react';

import { useCurrentUser } from '../hooks/use-current-user';

import { DragTodoProvider } from '../context/drag-todo-context'

import SectionsBoard from '../components/sections-board/sections-board';
import LogoutButton from '../ui/logout-button/logout-button'
import Header from '../ui/header/header'

const UserPage = () => {
    const { logout } = useCurrentUser()

    return (
        <DragTodoProvider>
            <Header>
                To do app             
                <LogoutButton onClick={logout}>Sair</LogoutButton>
            </Header>
            <SectionsBoard/>
        </DragTodoProvider>
    );
};

export default UserPage;