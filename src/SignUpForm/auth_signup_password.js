import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import 'firebase/auth'
import React, { useEffect, useState } from "react";
import Footer from "../RewardApp/RewardAppFooter/footer";
import './signup.css';
import LoadingScreen from "../RewardApp/Loading_screen/loadingScreen";
import Notification from "../Notification/notification";
// import auth from '../FirebseConfig/firebaseconfig'
import 'firebase/compat/auth'
import { initializeApp } from "firebase/app";
import firebaseConfig from '../FirebseConfig/firebaseconfig';
// import { Link } from "react-router-dom";
import HeaderP from "../RewardApp/RewardAppHeader/headerP";
import { details } from "../RewardApp/Data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Profile from "../Dashboard/Profile/profile";

const SignupPage = ({brand}) => {
    const navigate = useNavigate();
    /**Sign Up codes */
    const [signUpPage, setSignUpPage] = useState({
        userName: '',
        gender: '',
        email: '',
        password: '',
        confirmPassword: '',
        passwordMismatch: false,
    });
    /**Login Page */
    const [loginPage, setLoginPage] = useState({
        loginEmail: '',
        loginPassword: '',
    });
    /**Loading */
    const [loading, setIsLoading] = useState(true);
    /**Notifications */
    const [showFailureAlert, setShowFailureAlert] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [condition, setCondition] = useState(false);
    const [newAccount, setNewAccount] = useState(true);
    /**Storing all users data */
    const [data, setNewData] = useState([]);
    /**Firebase Config */
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleChangeInSignUpPage = (e) => {
        const { name, value } = e.target;
        setSignUpPage((prev) => ({...prev, [name]: value}))
    };
    const handleLoginPage = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        // console.log(name, value);
        setLoginPage(prev => ({...prev, [name]: value}))
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        if (signUpPage.userName && signUpPage.email && signUpPage.password && signUpPage.confirmPassword){
            if (signUpPage.password === signUpPage.confirmPassword)
            {
                try{
                    await createUserWithEmailAndPassword(auth, signUpPage.email, signUpPage.password)
                    .then(userCredential => {
                        const user = userCredential.user;
                        console.log(user);
                    })
                }
                catch(error){
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                }
                let { userName, gender, email, password} = signUpPage;
                let uniqueID = new Date().getTime().toString();
                setNewData((prevData) => {
                    return [...prevData, {userName, gender, email, password, uniqueID}];
                });
                setTimeout(()=>{
                    return (
                        <Profile {...data}/>
                    )
                }, 100);
                setSignUpPage({
                    userName: '',
                    gender: '',
                    email: '',
                    password: '',
                })
                setShowSuccessAlert(true);
                setTimeout(() => {
                    setShowSuccessAlert(false);
                }, 3000);
                //go to profile
                setTimeout(() => {
                    return (
                        navigate('/profile')
                    )
                }, 1000);
            }
            else{
                setSignUpPage((prevValue) => {
                    return {...prevValue, passwordMismatch: true}
                })
                setTimeout(() => {
                    setSignUpPage((prevValue) => {
                        return {...prevValue, passwordMismatch: false};
                    })
                }, 3000);
            }
        }
        else{
            setShowFailureAlert(true);
            setTimeout(() => {
                setShowFailureAlert(false);
            }, 3000);
        }
    }
    const handleLogin2 = () => {
        if (loginPage.loginEmail && loginPage.loginPassword){
            return navigate('/profile')
        }
    }
    const toggle = () => {
        setCondition(!condition);
        setNewAccount(!newAccount)
    }
    useEffect(()=>{
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        console.clear()
    },[]);

    if (loading)
    {
        return (
            <LoadingScreen/>
        )
    }
    return (
        <>
        <HeaderP appName={details.appName} background={'white'} color={'black'}/>
        <main className="signUpMain">
            <div className="signUpContainer">
                {newAccount && <form>
                    <h4 className="text-center text-secondary">Create a New Account</h4>
                    <label htmlFor="user_name">Name:<br/>
                        <input name="userName" type="name" required placeholder="John doe" id="user_name" value={signUpPage.userName} onChange={handleChangeInSignUpPage}/>
                    </label>
                    <label htmlFor="gender">Gender:<br/>
                        <select name="gender" value={signUpPage.gender} onChange={handleChangeInSignUpPage}>
                        <option value='Select gender'>Select gender</option>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                            <option value='Other'>Other</option>
                        </select>
                    </label>
                    <label htmlFor="signUpEmail">Email:<br/>
                        <input name="email" type="email" required placeholder="Johndoe@gmail.com" id="signUpEmail" value={signUpPage.email} onChange={handleChangeInSignUpPage}/>
                    </label>
                    <label htmlFor="signUpPassword">password:<br/>
                        <input name="password" type="password" required placeholder="******" value={signUpPage.password} onChange={handleChangeInSignUpPage} id="signUpPassword"/>
                    </label>
                    <label htmlFor="confirmPassword">Confirm password:<br/>
                        <input name="confirmPassword" type="password" required placeholder="******" value={signUpPage.confirmPassword} onChange={handleChangeInSignUpPage} id="confirmPassword"/>
                    </label>
                    <button className="btn btn-dark btn-sm rounded-0" onClick={handleLogin}>Sign Up</button>
                    <p className="text-center">Already have an account?, <span onClick={toggle} style={{textDecoration: 'underline'}}>Log in</span></p>
                </form>
                }
                {/* <hr/> */}
                {condition && <form>
                <h1 className="text-center">Welcome Back</h1>
                    <label htmlFor="login_email">Email:<br/>
                        <input name="loginEmail" type="email" required placeholder="Johndoe@gmail.com" id="login_email" value={loginPage.loginEmail} onChange={handleLoginPage}/>
                    </label>
                    <label htmlFor="login_password">password:<br/>
                        <input name="loginPassword" type="password" required placeholder="******" value={loginPage.loginPassword} onChange={handleLoginPage} id="login_password"/>
                    </label>
                    <button className="btn btn-dark btn-sm rounded-0" onClick={handleLogin2}>Log In</button>
                    <p className="text-center">Don't have an account?, <span onClick={toggle} style={{textDecoration: 'underline'}}>Sign in</span></p>
                </form>
                }
                <hr/>
                <form onSubmit={(e)=>{e.preventDefault()}} className="other_signUp text-center">
                    <button className="btn btn-primary text-white">
                        <FontAwesomeIcon style={{float: "left", fontSize: '25px'}} icon={faFacebook}/>
                        <span>Login with Facebook</span>
                    </button>
                    <button className="btn bg-light">
                        <FontAwesomeIcon style={{float: "left", fontSize: '25px'}} className="text-success" icon={faGoogle}/>
                        <span>Login with Google</span>
                    </button>
                </form>
            </div>
        </main>
        {showFailureAlert && <Notification message={'Please, fill the required fields'} color={'maroon'}/>}
        {showSuccessAlert && <Notification message={'Redirecting to your dashboard...'} color={'teal'}/>}
        {signUpPage.passwordMismatch && <Notification message={'Password does not match'} color={'darkgoldenrod'}/>}
        <Footer {...details}/>
        </>
    )
}

export default SignupPage