import React from "react";
import './addPage.css';
// import Logo from "../RewardHeader/Logo";
// import img from '../Assets/CADD4443-5504-4102-992A-858EB329F62A-removebg-preview.png'

const AddPage = ({name}) => {
    return (
        <>
        <div className="addPage"></div>
        <div className="text text-white text-center">
            {/* <h3>Welcome to our Passenger Reward System, where every journey is a rewarding adventure! Earn points with every 
                mile traveled and unlock exclusive perks tailored to your wanderlust. Join now and turn your travels into unforgettable experiences!
            </h3> */}
            <button title="sign up" className="btn btn-light">Sign Up</button>
        </div>
        </>
    )
};

export default AddPage;