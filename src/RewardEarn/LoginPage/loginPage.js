import React, { useEffect, useState } from 'react'
import LoadingPage from '../LoadingPage/LoadingPage';
import './loginPage.css'

const LoginPage = () => {
    const [loading, setisLoading] = useState(true);

    useEffect(()=>{
        setTimeout(() => {
            setisLoading(false);
        }, 3000);
    }, [loading]);

    if(loading){
        return (
            <LoadingPage/>
        )
    }
    return (
        <>
        <form className='loginPage'></form>
        </>
    )
}

export default LoginPage;
