import React, { Fragment } from 'react';

import Header from '../../components/header';
import Board from '../../components/board'
import { SectionProvider } from '../../contexts/SectionContext';


const User = () => {
    return (
        <SectionProvider>
            <Header/>
            <Board/>
        </SectionProvider>
    );
};

export default User;