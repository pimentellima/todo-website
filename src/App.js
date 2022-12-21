import React from 'react';
import { Routes, Route } from 'react-router-dom'

import GlobalStyle from './styles/global'

import { DataProvider } from './context/DataContext'

import Login from './pages/login'
import Signup from './pages/signup'
import User from './pages/user'

const App = () => {

    return (
        <DataProvider>
            <GlobalStyle/>
            <Routes>
                <Route path="/*" element={<Login/>} />
                <Route path="/login" element={<Login/>} />
                <Route path='/user' element={<User/>}/>
                <Route path='/signup' element={<Signup/>}/>
            </Routes>
        </DataProvider>
    )
}

export default App;
