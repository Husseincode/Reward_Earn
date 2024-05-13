import React, { useEffect, useState } from 'react';
import './signUp.css'
import LoadingPage from '../LoadingPage/LoadingPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';
import AppHeader from '../RewardHeader/RewardHeader';
import { Link, useNavigate } from 'react-router-dom';


const SignUp = () => {
    const [loading, setisLoading] = useState(true);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState([]);
    const navigate = useNavigate()

    const handleForm = (e) => {
        e.preventDefault();
        if (name && password){
            setData(prevValue => {
                return [...prevValue, {name, password}];
            });
            setTimeout(() => {
                navigate('/dashboard');
            }, 3000);

        };
        console.log(data);
    };

    useEffect(()=>{
        setTimeout(() => {
            setisLoading(false);
        }, 3000);
    },[loading]);

    if(loading){
        return(
            <LoadingPage/>
        )
    }
    return (<>
    <AppHeader/>
    <form onSubmit={handleForm} className='signUp text-center'>
        <h3>Sign up to start your journey</h3>
        <button className='btn border border-dark text-center m-2'><FontAwesomeIcon className='text-primary' icon={faGoogle}/>&nbsp;Continue with Google</button>
        <p>or</p>
        <input value={name} onChange={(e)=>{setName(e.target.value)}} type='email' id='email' placeholder='johndoe@gmail.com' required/>
        <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type='password' id='password' placeholder='Password' className='mt-3' required/>
        <button onClick={handleForm} className='btn btn-dark mt-3'>Log in</button>
        <Link style={{textDecoration: 'none'}} className='mt-3'>Reset password</Link>
        <p className='text-secondary mt-2'>No account? <Link style={{textDecoration: 'none'}}>Create one</Link></p>
    </form>
    </>)
}

export default SignUp;