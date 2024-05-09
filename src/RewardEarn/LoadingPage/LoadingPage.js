import React, { useEffect, useState } from "react";
import './LoadingPage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import img from '../Assets/k.png'

/**
 * @LoadingPage - This function returns the loading screen of a web page
 * 
 * @returns: Loading screen 
 */
const LoadingPage = () => {
    const [width, setWidth] = useState('50px');
    useEffect(()=>{
        setTimeout(()=>{
            if (width === '50px'){
                setWidth('70px');
            }
            else{
                setWidth('50px');
            }
        }, 1000)
    });
    return (
        <div className='loading'>
            <img style={{transition: '1s'}} width={width} src={img}/>
            {/* <FontAwesomeIcon style={{fontSize: '50px'}} icon={faSpinner} spin/> */}
        </div>
    );
};

export default LoadingPage;