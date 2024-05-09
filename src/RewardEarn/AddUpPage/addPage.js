import React from "react";
import './addPage.css';

const AddPage = ({name}) => {
    return (
        <>
        <div className="addPage"></div>
        <div className="text text-white text-center">
            <h1>{name}<hr style={{border: '2px solid white'}} className="line"/></h1>
            <button title="sign up" className="btn btn-light">Sign Up</button>
        </div>
        </>
    )
};

export default AddPage;