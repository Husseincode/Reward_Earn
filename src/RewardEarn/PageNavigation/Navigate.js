import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from "../MainApp/App";
import ErrorPage from "../ErrorPage/ErrorPage";
import UserDashBoard from "../AdditionalWebPages/UserDashboard";

const Navigate = () => {
    return (
        <Router>
            <Routes>
                <Route Component={App} exact path='/'/>
                {/* <Route Component={SignupPage} path='/signup'/>
                <Route Component={Profile} path='/profile'/> */}
                <Route Component={ErrorPage} path="*"/>
                <Route Component={UserDashBoard} path="/dashboard"/>
            </Routes>
        </Router>
    )
}

export default Navigate;