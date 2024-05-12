import React from 'react';
import './error.css';

const ErrorPage = () => {
    const goBack = () => {
        window.history.back();
    }
    return (
        <div className='error text-center'>
            <h3>Error 404</h3>
            <button onClick={goBack} className='btn btn-sm btn-dark'>Go back</button>
        </div>
    )
}

export default ErrorPage;