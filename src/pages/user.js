import React from 'react';

import { Board, Header, DragProvider } from '../features/project/index'

const User = () => {

    return (
        <DragProvider>
            <Header/>
            <Board/>
        </DragProvider>
    );
};

export default User;