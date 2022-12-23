import React from 'react';

import { useUserAuth } from '../hooks/use-user-auth'

import { DragTodoProvider } from '../context/drag-todo-context'

import SectionsBoard from '../components/sections-board/sections-board'
import LogoutButton from '../components/logout-button/logout-button'
import Header from '../components/header/header'


const UserPage = () => {
    const { logout } = useUserAuth()

    return (
        <DragTodoProvider>
            <Header>
                mathasks             
                <LogoutButton onClick={logout}>Sair</LogoutButton>
            </Header>
            <SectionsBoard/>
        </DragTodoProvider>
    );
};

export default UserPage;