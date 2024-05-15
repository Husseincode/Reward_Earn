import React, { useEffect, useState } from "react";
import './LoadingPage.css';
import img from '../Assets/Kings .png'

/**
 * @LoadingPage - This function returns the loading screen of a web page
 * 
 * @returns: Loading screen 
 */
const LoadingPage = () => {
    const [width, setWidth] = useState('100px');
    useEffect(()=>{
        setTimeout(()=>{
            if (width === '100px'){
                setWidth('150px');
            }
            else{
                setWidth('100px');
            }
        }, 1000)
    });
    return (
        <div className='loading'>
            <img style={{transition: '1s'}} alt="Loading page" width={width} src={img}/>
            {/* <FontAwesomeIcon style={{fontSize: '50px'}} icon={faSpinner} spin/> */}
        </div>
    );
};

export default LoadingPage;