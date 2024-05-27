import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from "../MainApp/App";
import ErrorPage from "../ErrorPage/ErrorPage";
import UserDashBoard from "../AdditionalWebPages/UserDashboard";
import UserTransactionHistory from "../AdditionalWebPages/UserTransactionHistory";
import SignIn from "../SignInPage/signin";
import { SignUpPage } from "../SignUpPage/SignUpPage";
import UserReward from "../AdditionalWebPages/UserReward";

const Navigate = () => {
    return (
        <Router>
            <Routes>
                <Route Component={App} exact path='/'/>
                <Route Component={ErrorPage} path="*"/>
                <Route Component={UserDashBoard} path="/dashboard"/>
                <Route Component={UserTransactionHistory} path="/transaction"/>
                <Route Component={SignIn} path="/sign-in"/>
                <Route Component={SignUpPage} path="/sign-up"/>
                <Route Component={UserReward} path="/reward"/>
            </Routes>
        </Router>
    )
}

export default Navigate;