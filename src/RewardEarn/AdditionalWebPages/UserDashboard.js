import React, { useEffect, useState } from 'react';
import './userDashboard.css';
import Logo from '../RewardHeader/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashcube } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp, faBell, faBus, faHistory, faHome, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import { name } from './dummyName';
import { dummyData } from './dummyData';
import LoadingPage from '../LoadingPage/LoadingPage';
import { dummyTransactionData } from './dummyTransactionData';

const UserDashBoard = () => {
    const [loading, setisLoading] = useState(true);
    useEffect(()=>{
        setTimeout(() => {
            setisLoading(false);
        }, 3000);
        return () => {}
    },[loading]);

    if(loading){
        return (
            <LoadingPage/>
        )
    }
    return (
        <React.Fragment>
            {/* <AppHeader/> */}
            <main className='body'>
                <div className='firstSection'>
                    <div className='logo'>
                        <Logo/>
                    </div>
                    <div className='links'>
                        {/* <Link to={'/'}>Dashboard</Link> */}
                        <Link to={'/dashboard'} className='lnk' title='Dashboard'><FontAwesomeIcon icon={faDashcube}/> Dashboard</Link>
                        <Link to={'/transaction'} className='lnk' title='Transaction History'><FontAwesomeIcon icon={faHistory}/> Transaction History</Link>
                        <Link to={'/reward'} className='lnk' title='Track Rewards'><FontAwesomeIcon icon={faBus}/> Track Rewards</Link>
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
                            <FontAwesomeIcon title='notification' className='icon' icon={faBell}/>
                            <FontAwesomeIcon title={name} className='icon user_icon' icon={faUserCircle}/>
                        </div>
                    </div>
                    <div className='balances'>
                        {
                            dummyData.map(item => {
                                const { id, title, liquidity, history, url } = item;
                                return (
                                    <div key={id} title={title} className='card'>
                                        <p>{title}</p>
                                        <h5 className='fw-bolder'>{liquidity}</h5>
                                        <Link style={{textDecoration: 'none', fontSize: '13px'}} className='text-secondary fw-bolder' to={url}>{history} <FontAwesomeIcon style={{transform: 'rotate(40deg)'}} icon={faArrowUp}/></Link>
                                    </div>
                                );
                                
                            })
                        }
                    </div>
                    <div className='history card text-secondary'>
                        <div className='d-flex justify-content-between'>
                            <p><FontAwesomeIcon icon={faHistory}/> Transaction History</p>
                            <Link style={{color: '#F5A800'}} className='text-decoration-none' to={'/transaction'}>View All</Link>
                        </div>
                        <table className='card text-secondary'>
                            <thead>
                                <tr className='bg-light text-left'>
                                    <th>Type</th>
                                    <th>Location</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Transaction ID</th>
                                    <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                dummyTransactionData.map(item => {
                                    const { transactionID, transactionType, location, amount, status, date, time, action, color } = item;
                                    return (
                                        <tr title={status} key={transactionID} className='text-left'>
                                            <td title={transactionType}>{transactionType}</td>
                                            <td title={location}>{location}</td>
                                            <td title={amount}>{amount}</td>
                                            <td title={status} style={{color: `${color}`}}>{status}</td>
                                            <td title={date}>{date}</td>
                                            <td title={time}>{time}</td>
                                            <td title={transactionID}>{transactionID}</td>
                                            <td title={action} className='text-warning'>{action}</td>
                                    </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </React.Fragment>
    )
}

export default UserDashBoard;
