import React, { useEffect, useState } from 'react';
import './signUpPage.css'
import AppHeader from '../RewardHeader/RewardHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import LoadingPage from '../LoadingPage/LoadingPage';
import Notify from '../Notification/Notification';

const SignUpPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const [failure, setFailure] = useState(false);
    const [success, setSuccess] = useState(false);
    const [incorrectPassword, setIncorrectPassword] = useState(false);
    const [signUpDetails, setSignUpDetails] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: '',
    });

    const handleDataChange = (e) => {
        const { name, value } = e.target;
        setSignUpDetails(prevData => ({...prevData, [name]: value}));
    };
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, confirm_password } = signUpDetails;
        if (name && email && password && confirm_password){
            //check if the password matches
            if (password === confirm_password){
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 3000);
                setTimeout(() => {
                    navigate('/dashboard');
                }, 2000);
            }
            else{
                setIncorrectPassword(true);
                setTimeout(() => {
                    setIncorrectPassword(false);
                }, 3000);
            }
        }
        else{
            setFailure(true);
            setTimeout(() => {
                setFailure(false);
            }, 3000);
        }
    }

    useEffect(()=>{
        setTimeout(() => {
            setIsLoading(false)
        }, 3000);
    },[isLoading]);

    if(isLoading){
        return (<LoadingPage/>)
    }
    return (
        <>
        <AppHeader/>
        <form onSubmit={handleFormSubmit} className='signUpPage'>
            <h3 className='text-center'>Sign up to get started</h3>
            <label htmlFor='name'> Fullname:
                <input onChange={handleDataChange} value={signUpDetails.name} name='name' placeholder='John doe' type='text' id='name' required/>
            </label>
            <label htmlFor='email'> Email:
                <input onChange={handleDataChange} value={signUpDetails.email} name='email' placeholder='Johndoe@gmail.com' type='email' id='email' required/>
            </label>
            <label htmlFor='password'> Password:
                <input onChange={handleDataChange} value={signUpDetails.password} name='password' type='password' id='password' required/>
            </label>
            <label htmlFor='confirm_password'> Confirm Password:
                <input onChange={handleDataChange} value={signUpDetails.confirm_password} name='confirm_password' type='password' id='confirm_password' required/>
            </label>
            <button onClick={handleFormSubmit} className='btn btn-dark mt-2'>Let's Go <FontAwesomeIcon icon={faRocket}/></button>
            <p className='text-secondary text-center'>You have an account? <Link className='text-decoration-none' to={'/sign-in'}>Sign In</Link></p>
        </form>
        {failure && <Notify message={'Fill in the required fields'} color={'darkgoldenrod'}/>}
        {success && <Notify message={'Redirecting...'} color={'teal'}/>}
        {incorrectPassword && <Notify message={'Passwords don\'t match'} color={'maroon'}/>}
        </>
    )
}

export default SignUpPage
