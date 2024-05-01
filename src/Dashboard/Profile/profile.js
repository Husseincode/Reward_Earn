/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react'
import HeaderP from '../../RewardApp/RewardAppHeader/headerP'
import Footer from '../../RewardApp/RewardAppFooter/footer'
import { details } from '../../RewardApp/Data/data'
import './profile.css'
import LoadingScreen from '../../RewardApp/Loading_screen/loadingScreen'
import dp from  '../../RewardApp/Assets/road3.jpg'

const Profile = ({ userName }) => {
    const [loading, setIsLoading] = useState(true);
    useEffect(()=>{
        setTimeout(() => {
            setIsLoading(false)
        }, 3000);
    })
    if (loading){
        return (
            <LoadingScreen/>
        )
    }
    return (<>
        <HeaderP color={'black'} {...details}/>
        <main className='profile'>
            <h1 className='text-center' style={{margin: '20px 0px'}}>Profile</h1>
            <div className='' style={{display: 'flex', justifyContent: 'center'}}>
                <img className='' alt='profile image' src={dp}/>
            </div>
            <div className='info text-dark'>
                <div>
                    <p>Name</p>
                    <p>John Doe</p>
                </div>
                <div>
                    <p>Gender</p>
                    <p>Male</p>
                </div>
                <div>
                    <p>Email</p>
                    <p>johndoe@gmail.com</p>
                </div>
                <div>
                    <p>Username</p>
                    <p>johnnydoe</p>
                </div>
            </div>
        </main>
        <Footer {...details}/>
    </>)
}

export default Profile;