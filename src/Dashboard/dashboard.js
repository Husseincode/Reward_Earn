import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [closeDashboard, setCloseDashboard] = useState(true);
    const close = () => {
        setCloseDashboard(!closeDashboard);
    }

    return (
        <>
        {closeDashboard && <div className='dashboard'>
            <FontAwesomeIcon onClick={close} className='closeIcon' title='Exit' icon={faClose}/>
            <div>
                <Link className='link' to={'/'}>Home</Link>
                <Link className='link' to={'/signup'}>Create an Account</Link>
                <Link className='link' to={'/profile'}>Profile</Link>
            </div>
        </div>}
        </>
    )
}

export default Dashboard