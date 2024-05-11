import React from 'react';
import { Link } from 'react-router-dom';
import './error.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const ErrorPage = () => {
    return (
        <div className='error text-center'>
            <h3>Error 404</h3>
            <Link style={{fontSize: '10px'}} className='btn btn-dark btn-sm' to={'/'}>Back to home <FontAwesomeIcon icon={faHome}/></Link>
        </div>
    )
}

export default ErrorPage
