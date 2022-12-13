import React, { Fragment } from 'react';

import Board from '../../components/board'
import { SectionProvider } from '../../contexts/SectionContext';


const User = () => {
    return (
        <Fragment>
            <SectionProvider>
                <Board/>
            </SectionProvider>
        </Fragment>
    );
};

export default User;