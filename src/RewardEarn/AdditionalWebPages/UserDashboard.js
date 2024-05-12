import React from 'react';
import './userDashboard.css';
import Logo from '../RewardHeader/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashcube } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp, faBell, faBus, faDollarSign, faHistory, faHome, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { name } from './dummyName';
import { dummyData } from './dummyData';
import AppFooter from '../RewardFooter/RewardFooter';

const UserDashBoard = () => {
    return (
        <React.Fragment>
            {/* <AppHeader/> */}
            <section className='body'>
                <div className='firstSection'>
                    <div className='logo'>
                        <Logo/>
                    </div>
                    <div className='links'>
                        {/* <Link to={'/'}>Dashboard</Link> */}
                        <Link className='lnk' title='Dashboard'><FontAwesomeIcon icon={faDashcube}/> Dashboard</Link>
                        <Link className='lnk' title='Transaction History'><FontAwesomeIcon icon={faHistory}/> Transaction History</Link>
                        <Link className='lnk' title='Track Rewards'><FontAwesomeIcon icon={faBus}/> Track Rewards</Link>
                        <Link to={'/'} className='lnk' title='Home'><FontAwesomeIcon icon={faHome}/> Go Home</Link>
                    </div>
                </div>
                <div className='secondSection bg-light'>
                    <div className='intro'>
                        <div>
                            <h6 className='fw-bolder'>Welcome Back, {name}</h6>
                            <span className='text-secondary'>Dashboard overview</span>
                        </div>
                        <div>
                            <FontAwesomeIcon className='icon' icon={faBell}/>
                            <FontAwesomeIcon className='icon' icon={faUserCircle}/>
                        </div>
                    </div>
                    <div className='balances'>
                        {
                            dummyData.map(item => {
                                const { title, liquidity, history } = item;
                                return (
                                    <div className='card'>
                                        <p className='text-secondary'>{title}</p>
                                        <h4 className='fw-bolder'><FontAwesomeIcon icon={faDollarSign}/> {liquidity}</h4>
                                        <Link style={{textDecoration: 'none', fontSize: '13px'}} className='text-warning' to={history}>{history} <FontAwesomeIcon style={{transform: 'rotate(40deg)'}} icon={faArrowUp}/></Link>
                                    </div>
                                );
                                
                            })
                        }
                    </div>
                    <div className='history card'></div>
                </div>
            </section>
            <AppFooter/>
        </React.Fragment>
    )
}

export default UserDashBoard;
