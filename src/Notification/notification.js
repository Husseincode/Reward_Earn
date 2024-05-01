import React from 'react'
import './notification.css'

const Notification = ({ message, color }) => {
    return (
        <div style={{borderBottom: `2px solid ${color}`}} className='notify'>
            <p style={{color: `${color}`}}>{message}</p>
        </div>
    )
}

export default Notification
