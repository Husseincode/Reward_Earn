import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './header.css'

let header_style = {
  textDecoration: 'none',
  color: 'black'
}
const SignUpHeader = ({brand}) => {
  return (
    <>
    <header className='shadow-sm signup'>
        <nav>
            <h1><Link style={header_style} to={'/'}>{brand}</Link></h1>
            <div className='menu_bar'>
              <p>ABOUT</p>
              <p>BLOG</p>
              <p>CONTACT</p>
            </div>
            <div className='icon'>
                <FontAwesomeIcon className='' icon={faBarsStaggered}/>
            </div>
        </nav>
    </header>
    </>
  )
}

export default SignUpHeader
