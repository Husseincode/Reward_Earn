import React from 'react';
import img from '../Assets/k.png';
import './Logo.css';
import { data2 } from '../WebData/data';

const Logo = () => {
    const { name } = data2
    return (
    <div className='logo_styling'>
        <img src={img} alt="K"/>
        <span>{name.replace(/K/ig, '')}</span>
    </div>
    )
}

export default Logo
