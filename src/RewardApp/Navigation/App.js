import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignupPage from '../../SignUpForm/auth_signup_password';
import MainApp from './MainApp';
import Profile from '../../Dashboard/Profile/profile';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route Component={MainApp} exact path='/'/>
                <Route Component={SignupPage} path='/signup'/>
                <Route Component={Profile} path='/profile'/>
            </Routes>
        </Router>
    )
}

export default App