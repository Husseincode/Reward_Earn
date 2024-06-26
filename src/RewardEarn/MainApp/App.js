import React, { useState, useEffect } from 'react';
// import AppHeader from '../RewardHeader/RewardHeader';
import AppMain from '../RewardMain/RewardMain';
import AppFooter from '../RewardFooter/RewardFooter';
import { data2 } from '../WebData/data';
import LoadingPage from '../LoadingPage/LoadingPage';
import LandingPage from '../RewardHeader/MixedHeaderPage';

/**
 * @App - This function shows the website page.
 * 
 * @returns: if loading page is true, it shows the loading screen
 * if it is false, the webpage is displayed. 
 */
const App = () => {
    const [loading, setIsLoading] = useState(true);

    useEffect(()=>{
        setTimeout(() => {
            setIsLoading(false);
        }, 5000);
    }, [])

    if (loading){
        return (
            <LoadingPage/>
        )
    }
    return (
        <>
        <LandingPage {...data2}/>
        <AppMain {...data2}/>
        <AppFooter {...data2}/>
        </>
    )
}

export default App;