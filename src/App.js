import React from 'react';

import GlobalStyle from './styles/global'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import User from './pages/User'
import { Routes, Route } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext';

const App = () => {

    return (
        <UserProvider>
            <GlobalStyle/>
            <Routes>
                <Route path="/*" element={<Signin/>} />
                <Route path='/user' element={<User/>}/>
                <Route path='/signup' element={<Signup/>}/>
            </Routes>
        </UserProvider>
    )
}

export default App;
