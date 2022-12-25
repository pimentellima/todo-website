import React from 'react';
import { Routes, Route } from 'react-router-dom'

import GlobalStyle from './global-styles/global'

import { CurrentUserProvider } from './context/current-user-context';

import Login from './pages/login-page'
import Signup from './pages/signup-page'
import User from './pages/user-page'

const App = () => {

    return (
        <CurrentUserProvider>
            <GlobalStyle/>
            <Routes>
                <Route path="/*" element={<Login/>} />
                <Route path="/login" element={<Login/>} />
                <Route path='/user' element={<User/>}/>
                <Route path='/signup' element={<Signup/>}/>
            </Routes>
        </CurrentUserProvider>
    )
}

export default App;
