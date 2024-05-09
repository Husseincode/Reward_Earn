import React from "react";
import AddPage from "../AddUpPage/addPage";
import AppHeader from "./RewardHeader";

const LandingPage = ({name}) => {
    return (
        <>
        <AppHeader/>
        <AddPage name={name}/>
        </>
    )
}

export default LandingPage;