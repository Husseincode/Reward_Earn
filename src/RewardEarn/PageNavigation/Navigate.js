import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from "../MainApp/App";
import ErrorPage from "../ErrorPage/ErrorPage";
import UserDashBoard from "../AdditionalWebPages/UserDashboard";
import UserTransactionHistory from "../AdditionalWebPages/UserTransactionHistory";
import SignUp from "../SignUpPage/signUp";
import LoginPage from "../LoginPage/loginPage";

const Navigate = () => {
    return (
        <Router>
            <Routes>
                <Route Component={App} exact path='/'/>
                <Route Component={ErrorPage} path="*"/>
                <Route Component={UserDashBoard} path="/dashboard"/>
                <Route Component={UserTransactionHistory} path="/transaction"/>
                <Route Component={SignUp} path="/sign-up"/>
                <Route Component={LoginPage} path="/login"/>
            </Routes>
        </Router>
    )
}

export default Navigate;