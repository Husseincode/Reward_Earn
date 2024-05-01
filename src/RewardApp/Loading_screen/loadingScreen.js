// import { faSpinner } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './loadingscreen.css'
import React from 'react';
import load from '../Assets/load2.jpg'

const LoadingScreen = () => {
  return (
    <div className='loading'>
        <img src={load} alt='Loading screen'/>
    </div>
  )
}

export default LoadingScreen