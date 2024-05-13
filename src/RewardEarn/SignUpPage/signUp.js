import React, { useEffect, useState } from 'react';
import './signUp.css'
import LoadingPage from '../LoadingPage/LoadingPage';

const SignUp = () => {
    const [loading, setisLoading] = useState(true);

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
    <form className='signUp'>
    </form>
    </>)
}

export default SignUp;