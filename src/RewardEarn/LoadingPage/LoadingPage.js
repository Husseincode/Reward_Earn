import React from "react";
import './LoadingPage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

/**
 * @LoadingPage - This function returns the loading screen of a web page
 * 
 * @returns: Loading screen 
 */
const LoadingPage = () => {
    return (
        <div className='loading'>
            <FontAwesomeIcon style={{fontSize: '50px'}} icon={faSpinner} spin/>
        </div>
    );
};

export default LoadingPage;