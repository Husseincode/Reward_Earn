import React from "react";
import './addPage.css';
import Logo from "../RewardHeader/Logo";

const AddPage = ({name}) => {
    return (
        <>
        <div className="addPage"></div>
        <div className="text text-white text-center">
            <Logo/><hr/>
            <button title="sign up" className="btn btn-light">Sign Up</button>
        </div>
        </>
    )
};

export default AddPage;