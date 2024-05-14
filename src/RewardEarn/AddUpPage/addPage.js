import React from "react";
import './addPage.css';
import { Link } from "react-router-dom";

const AddPage = () => {
    return (
        <>
        <div className="addPage"></div>
        <div className="text text-white text-center">
            {/* <Logo/> */}
            <h3>Welcome to our Passenger Reward System, where every journey is a rewarding adventure!</h3>
            <Link to={'sign-in'} title="sign in" className="btn btn-sm btn-warning mt-2">Sign in</Link>
        </div>
        </>
    )
};

export default AddPage;