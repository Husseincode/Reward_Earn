import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from "../MainApp/App";

const Navigate = () => {
    return (
        <Router>
            <Routes>
                <Route Component={App} exact path='/'/>
                {/* <Route Component={SignupPage} path='/signup'/>
                <Route Component={Profile} path='/profile'/> */}
            </Routes>
        </Router>
    )
}

export default Navigate;