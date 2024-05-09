import React from "react";
import './Notification.css';

/**
 * @Notify - This function is expected to render the notification alert to
 * the webpage, given its necessary parameters.
 * 
 * @message - Message to be passed in.
 * @color - Display color to indicate the cruciality.
 * @returns: The Notify alert
 */
const Notify = ({message, color}) => {
    return (
        <div className="notify" style={{border: `2px solid ${color}`, color: `${color}`}}>{message}</div>
    );
};

export default Notify;