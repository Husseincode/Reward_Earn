import React, { useEffect, useState } from 'react'
import AppHeader from '../RewardAppHeader/header';
import AppMain from '../RewardAppMain/main'
import Footer from '../RewardAppFooter/footer';
import LoadingScreen from '../Loading_screen/loadingScreen';
import { details } from '../Data/data';

const MainApp = () => {
    const [loading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false);
        }, 3000);
        console.clear()
    }, []);
    if (loading)
    {
        //Loading screen
        return (<LoadingScreen/>)
    }
    else{
        return (
            <>
            <AppHeader {...details}/>
            <AppMain/>
            <Footer {...details}/>
            </>
        )
    }
}

export default MainApp;