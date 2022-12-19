import React, { Fragment } from 'react';

import Board from '../../components/board'
import { DragProvider } from '../../contexts/dragContext';

const User = () => {
    return (
        <DragProvider>
            <Board/>
        </DragProvider>
    );
};

export default User;