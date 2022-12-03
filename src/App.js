import React from 'react';

import GlobalStyle from './styles/global'
import Header from './components/header';
import Board from './components/board'

const App = () => {
    return (
        <>
            <GlobalStyle/>
            <Header/>
            <Board/>
        </>
    );
};

export default App;