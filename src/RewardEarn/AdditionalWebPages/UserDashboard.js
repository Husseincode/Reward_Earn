import React, { useEffect, useState } from 'react';
import './userDashboard.css';
import Logo from '../RewardHeader/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashcube } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp, faBell, faBus, faDollarSign, faHistory, faHome, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { name } from './dummyName';
import { dummyData } from './dummyData';
// import AppFooter from '../RewardFooter/RewardFooter';
import LoadingPage from '../LoadingPage/LoadingPage';
import { dummyTransactionData } from './dummyTransactionData';

const UserDashBoard = () => {
    const [loading, setisLoading] = useState(true);

    useEffect(()=>{
        setTimeout(() => {
            setisLoading(false);
        }, 3000);
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
                            <FontAwesomeIcon title='notification' className='icon' icon={faBell}/>
                            <FontAwesomeIcon title={name} className='icon user_icon' icon={faUserCircle}/>
                        </div>
                    </div>
                    <div className='balances'>
                        {
                            dummyData.map(item => {
                                const { id, title, liquidity, history } = item;
                                return (
                                    <div key={id} title={title} className='card'>
                                        <p>{title}</p>
                                        <h4 className='fw-bolder'><FontAwesomeIcon icon={faDollarSign}/> {liquidity}</h4>
                                        <Link style={{textDecoration: 'none', fontSize: '13px'}} className='text-secondary fw-bolder' to={history}>{history} <FontAwesomeIcon style={{transform: 'rotate(40deg)'}} icon={faArrowUp}/></Link>
                                    </div>
                                );
                                
                            })
                        }
                    </div>
                    <div className='history card text-secondary'>
                        <p><FontAwesomeIcon icon={faHistory}/> Transaction History</p>
                        <table className='card text-secondary'>
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
                            {
                                dummyTransactionData.map(item => {
                                    const { transactionID, transactionType, location, amount, status, date, time, action, color } = item;
                                    return (<tr title={status} key={transactionID} className='text-left'>
                                        <td title={transactionType}>{transactionType}</td>
                                        <td title={location}>{location}</td>
                                        <td title={amount}>{amount}</td>
                                        <td title={status} style={{color: `${color}`}}>{status}</td>
                                        <td title={date}>{date}</td>
                                        <td title={time}>{time}</td>
                                        <td title={transactionID}>{transactionID}</td>
                                        <td title={action} className='text-warning'>{action}</td>
                                    </tr>)
                                })
                            }
                        </table>
                    </div>
                </div>
            </main>
            {/* <AppFooter/> */}
        </React.Fragment>
    )
}

export default UserDashBoard;
