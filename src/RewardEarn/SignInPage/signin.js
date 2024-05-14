import React, { useEffect, useState, createContext } from 'react';
import './signin.css'
import LoadingPage from '../LoadingPage/LoadingPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';
import AppHeader from '../RewardHeader/RewardHeader';
import { Link, useNavigate } from 'react-router-dom';
import Notify from '../Notification/Notification';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

export const DataContext = createContext()
const SignIn = () => {
    const [loading, setisLoading] = useState(true);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [person, setNewPerson] = useState([]);
    const navigate = useNavigate();
    const [successCondition, setSuccessCondition] = useState(false);
    const [failureCondition, setFailureCondition] = useState(false);

    const handleForm = (e) => {
        e.preventDefault();
        if (name && password){
            setNewPerson(prevValue => {
                return [...prevValue, {name, password}];
            });
            setSuccessCondition(true);
            setTimeout(() => {
                setSuccessCondition(false);       
            }, 3000);
            setTimeout(() => {
                navigate('/dashboard', { state: {
                    data: person
                }});
            }, 3000);
        }
        else{
            setFailureCondition(true);
            setTimeout(() => {
                setFailureCondition(false);
            }, 3000);
        }
    };

    const GoogleSignIn = (e) => {
        e.preventDefault();
        setSuccessCondition(true);
        setTimeout(() => {
            setSuccessCondition(false);
        }, 3000);
        setTimeout(() => {
            navigate('/dashboard');
        }, 3000);
    }

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
        <h3>Sign in to start your journey</h3>
        <button onClick={GoogleSignIn} className='btn border border-dark text-center m-2'><FontAwesomeIcon className='text-primary' icon={faGoogle}/>&nbsp;Continue with Google</button>
        <p>or</p>
        <input value={name} onChange={(e)=>{setName(e.target.value)}} type='email' id='email' placeholder='johndoe@gmail.com' required/>
        <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type='password' id='password' placeholder='Password' className='mt-3' required/>
        <button onClick={handleForm} className='btn btn-dark mt-3'>Log in <FontAwesomeIcon icon={faRocket}/></button>
        <Link style={{textDecoration: 'none'}} className='mt-3'>Reset password</Link>
        <p className='text-secondary mt-2'>No account? <Link to={'/sign-up'} style={{textDecoration: 'none'}}>Create one</Link></p>
    </form>
    {successCondition && <Notify message={'Redirecting...'} color={'teal'}/>}
    {failureCondition && <Notify message={'Fill the necessary fields'} color={'darkgoldenrod'}/>}
    </>)
}

export default SignIn;