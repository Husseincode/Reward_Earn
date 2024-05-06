import React, { useState, useEffect } from 'react';
import AppHeader from '../RewardHeader/RewardHeader';
import AppMain from '../RewardMain/RewardMain';
import AppFooter from '../RewardFooter/RewardFooter';
import { data } from '../WebData/data';
import LoadingPage from '../LoadingPage/LoadingPage';

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
        }, 3000);
    }, [])

    if (loading){
        return (
            <LoadingPage/>
        )
    }
    return (
        <>
        <AppHeader {...data}/>
        <AppMain {...data}/>
        <AppFooter {...data}/>
        </>
    )
}

export default App