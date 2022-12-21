import React from 'react';

import { Board, Header, UserContainer, DragProvider } from '../features/project/index'

const User = () => {

    return (
        <DragProvider>
            <UserContainer>
                <Header/>
                <Board/>
            </UserContainer>
        </DragProvider>
    );
};

export default User;