import React from 'react';
import img from '../Assets/k.png';
import './Logo.css'

const Logo = () => {
    return (
    <div className='logo_styling'>
        <img src={img} alt="K"/>
        <span>atab Reward</span>
    </div>
    )
}

export default Logo
