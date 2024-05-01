import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsProgress, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import Dashboard from '../../Dashboard/dashboard';
import { Link } from 'react-router-dom';

const HeaderP = ({appName, background, color}) => {
    const [showDashboard, setShowDashboard] = useState(false);
    return <>
    {showDashboard && <Dashboard/>}
    <header style={{background: `${background}`, color: `${color}`}} className='header_const shadow-sm'>
        <nav className='nav_const'>
          <Link to={'/'} style={{textDecoration: 'none', color: `${color}`}}><h1>{appName}</h1></Link>
          <div className='menu_bar'>
            <p>ABOUT</p>
            <p>BLOG</p>
            <p>CONTACT</p>
          </div>
          <div className='icon'>
            <FontAwesomeIcon onClick={()=>{
              setShowDashboard(!showDashboard);
              }} className='icon_pink' icon={faBarsProgress}/>
          </div>
        </nav>
    </header>
    </>
}

export default HeaderP