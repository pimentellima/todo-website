import React from 'react';
import { Routes, Route } from 'react-router-dom'

import GlobalStyle from './global-styles/global'

import { ThemeProvider } from 'styled-components';
import theme from './global-styles/theme';

import { CurrentUserProvider } from './context/current-user-context';

import Login from './pages/login-page'
import Signup from './pages/signup-page'
import User from './pages/user-page'

const App = () => {

    return (
        <CurrentUserProvider>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>  
                <Routes>
                    <Route path="/*" element={<Login/>} />
                    <Route path="/login" element={<Login/>}/>
                    <Route path='/user' element={<User/>}/>
                    <Route path='/signup' element={<Signup/>}/>
                </Routes>
            </ThemeProvider>
        </CurrentUserProvider>
    )
}

export default App;
