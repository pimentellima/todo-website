import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CurrentUserProvider } from './context/current-user-context';
import Login from './pages/login-page';
import Signup from './pages/signup-page';
import User from './pages/user-page';
import GlobalStyle from './styles/global-style';
import theme from './styles/theme';

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
