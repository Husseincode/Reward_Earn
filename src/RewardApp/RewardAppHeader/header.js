import React, { useState } from 'react';
import './header.css';
import HeaderP from './headerP';
import { Link } from 'react-router-dom';


const AppHeader = ({appName}) => {
  return (
    <>
    <HeaderP color={'white'} appName={appName}/>
    <section className='app_container'>
        <div className='image_disp'></div>
        <div className='text_disp'>
          <h1 className='text-center'>Xclusive <span className=''>Rewards</span></h1>
          <Link to={'/signup'} className='btn btn-sm btn-light m-1'>Log in</Link>
          <p className='m-1 text-white text-center'>Don't have an account?, <Link style={{color: 'white'}} to={'/signup'}>Sign Up</Link></p>
        </div>
    </section>
    </>
  )
}

export default AppHeader;
