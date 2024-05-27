import React, { useEffect, useState, useRef, createContext, useContext } from 'react';
import './signUpPage.css'
import AppHeader from '../RewardHeader/RewardHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faRocket } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import LoadingPage from '../LoadingPage/LoadingPage';
import Notify from '../Notification/Notification';
//firebase
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../../FirebseConfig/firebaseconfig'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash';

const userContext = createContext();

const SignUpPage = () => {
    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const [failure, setFailure] = useState(false);
    const [success, setSuccess] = useState(false);
    const [passwordValidity, setPasswordValidity] = useState(false);
    const [incorrectPassword, setIncorrectPassword] = useState(false);
    const [signUpDetails, setSignUpDetails] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: '',
    });
    const [showPassword, setShowPassword] = useState(faEyeSlash);
    const [showConfirmPassword, setShowConfirmPassword] = useState(faEyeSlash);
    const password = useRef(null);
    const confirm_password = useRef(null);

    const handleDataChange = (e) => {
        const { name, value } = e.target;
        setSignUpDetails(prevData => ({...prevData, [name]: value}));
    };
    
    const toggleView = (e) => {
        if (showPassword.iconName === 'eye-slash'){
            setShowPassword(faEye);
            password.current.type = 'text'
        }
        else{
            setShowPassword(faEyeSlash);
            password.current.type = 'password'
        }
    };

    const toggleConfirmView = () => {
        if(showConfirmPassword.iconName === 'eye-slash'){
            setShowConfirmPassword(faEye);
            confirm_password.current.type = 'text';
        }
        else{
            setShowConfirmPassword(faEyeSlash);
            confirm_password.current.type = 'password'
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, confirm_password } = signUpDetails;
        if (name && email && password && confirm_password){
            if (password.length <= 6 || confirm_password.length <= 6){
                setPasswordValidity(true);
                setTimeout(() => {
                    setPasswordValidity(false)
                }, 3000);
            }
            else{
                //check if the password matches
                if (password === confirm_password){
                    setSuccess(true);
                    setTimeout(() => {
                        setSuccess(false);
                    }, 3000);
                    createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        //signed up
                        const user = userCredential.user;
                        console.log(user)
                        try {
                            const docRef = addDoc(collection(db, "users"), {
                                name: name,
                                email: email,
                                password: password,
                            });
                            console.log("Document written with ID: ", docRef.id);
                            localStorage.setItem('userData', JSON.stringify(signUpDetails))
                            setTimeout(() => {
                                navigate('/dashboard');
                            }, 2000);
                        } catch (error) {
                            console.error("Error adding document: ", e);
                        }
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode, errorMessage)
                        // ..
                    });
            }
            else{
                setIncorrectPassword(true);
                setTimeout(() => {
                    setIncorrectPassword(false);
                }, 3000);
            }
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
        let intervalId = setTimeout(() => {
            setIsLoading(false)
        }, 3000);

        onSnapshot(collection(db, 'users'), (snapshot)=>{
            console.log(snapshot.docs.map(doc => doc.data()))
        })

        return () => clearTimeout(intervalId)
    },[]);

    if(isLoading){
        return (<LoadingPage/>)
    }
    return (
        <>
        <userContext.Provider value={signUpDetails.name}></userContext.Provider>
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
                <input ref={password} onChange={handleDataChange} value={signUpDetails.password} name='password' type='password' id='password' required/>
                <FontAwesomeIcon name='password' onClick={toggleView} style={{position: 'absolute', zIndex: '1', margin: '15px 0px 0px -30px', cursor: 'pointer'}} icon={showPassword}/>
            </label>
            <label htmlFor='confirm_password'> Confirm Password:
                <input ref={confirm_password} onChange={handleDataChange} value={signUpDetails.confirm_password} name='confirm_password' type='password' id='confirm_password' required/>
                <FontAwesomeIcon name='confirm_password' onClick={toggleConfirmView} style={{position: 'absolute', zIndex: '1', margin: '15px 0px 0px -30px', cursor: 'pointer'}} icon={showConfirmPassword}/>
            </label>
            <button onClick={handleFormSubmit} className='btn btn-dark mt-2'>Let's Go <FontAwesomeIcon icon={faRocket}/></button>
            <p className='text-secondary text-center'>You have an account? <Link className='text-decoration-none' to={'/sign-in'}>Sign In</Link></p>
        </form>
        {failure && <Notify message={'Fill in the required fields'} color={'darkgoldenrod'}/>}
        {success && <Notify message={'Redirecting...'} color={'teal'}/>}
        {incorrectPassword && <Notify message={'Passwords don\'t match'} color={'maroon'}/>}
        {passwordValidity && <Notify message={'Password length must be greater than 6'} color={'darkgoldenrod'}/>}
        </>
    )
}
const useUser = () => useContext(userContext);
export { SignUpPage, useUser }