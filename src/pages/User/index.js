import React, { Fragment } from 'react';

import Board from '../../components/board'
import { SectionProvider } from '../../contexts/SectionContext';


const User = () => {
    return (
        <SectionProvider>
            <Board/>
        </SectionProvider>
    );
};

export default User;