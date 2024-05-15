import React, { useEffect, useState } from 'react';
import './userDashboard.css';
import Logo from '../RewardHeader/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashcube } from '@fortawesome/free-brands-svg-icons';
import { faBell, faBus, faHistory, faHome, faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { name } from './dummyName';
import LoadingPage from '../LoadingPage/LoadingPage';
import { dummyTransactionData } from './dummyTransactionData';

const UserTransactionHistory = () => {
    const [loading, setisLoading] = useState(true);
    const [value, setValue] = useState('All');
    const [data, setData] = useState(dummyTransactionData);
    const [inputValue, setInputValue] = useState('')

    const handleChange = (e) => {
        const value = e.target.value;
        setValue(value);
        if (value === 'All'){
            setData(dummyTransactionData)
        }
        else{
            const newData = data.filter(item => {return item.status === value});
            setData(newData);
        }
    };

    const handleInputSearch = (e) => {
        if (inputValue === ''){
            setData(dummyTransactionData)
        }
        else if (inputValue !== ''){
            const newSearch = data.filter(item => {
                return item.location.includes(inputValue)
            })
            setData(newSearch);
        }
        else{
            setData(dummyTransactionData)
        }
    }

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
                    <div className='history card text-secondary'>
                        <div className='mb-3 modify'>
                            <div className='d-flex'>
                                <div className='d-flex'>
                                    <input placeholder='Location...' value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}} onKeyUp={handleInputSearch} style={{borderRadius: '10px 0px 0px 10px'}} className='form-control'/>
                                    <button onClick={handleInputSearch} className='btn bg-light' style={{borderRadius: '0px 10px 10px 0px', color: '#F5A800'}}>
                                        <FontAwesomeIcon icon={faSearch}/>
                                    </button>
                                </div>
                                <div className='d-flex' style={{marginLeft: '10px'}}>
                                    <select value={value} onChange={handleChange} className='form-select bg-light text-dark'>
                                        <option value='All'>All</option>
                                        <option value='Failed'>Failed</option>
                                        <option value='Success'>Succesful</option>
                                        <option value='pending'>Pending</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <button style={{backgroundColor: '#F5A800'}} title='Book a trip' className='btn btn-sm text-white'>Book A Trip</button>
                            </div>
                        </div>
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
                                data.map(item => {
                                    const { transactionID, transactionType, location, amount, status, date, time, action, color } = item;
                                    return (<tr title={status} key={transactionID} className='text-left'>
                                        <td title={transactionType}>{transactionType}</td>
                                        <td title={location}>{location}</td>
                                        <td title={amount}>{amount}</td>
                                        <td title={status} style={{color: `${color}`}}>{status}</td>
                                        <td title={date}>{date}</td>
                                        <td title={time}>{time}</td>
                                        <td title={transactionID}>{transactionID}</td>
                                        <td title={action} style={{color: '#F5A800'}}>{action}</td>
                                    </tr>)
                                })
                            }
                        </table>
                    </div>
                </div>
            </main>
        </React.Fragment>
    )
}

export default UserTransactionHistory;