import React, { useReducer, useRef, useState } from "react";
import './RewardMain.css'
import { data } from "../WebData/data";
import Notify from "../Notification/Notification";
import reducer from "../Reducer/useReducer";
import { initialData } from "../Reducer/initialData";
import k from '../Assets/k.png'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

/**
 * @AppMain - This returns the page of the main.
 *  @name: The Website's name
 * @returns: The App Main Component
 */
const AppMain = ({name}) => {
    const [userDetails, setUserDetails] = useState({
        name: '',
        comment: '',
        email: '',
    });
    const [userData, setUserData] = useState([]);
    const [state, dispatch] = useReducer(reducer, initialData);
    const inputRef = useRef(null);
    // const [postComment, setPostComment] = useState();

    const handleFormData = (e) => {
        const { name, value } = e.target;
        setUserDetails((prevValue) => ({...prevValue, [name]: value}))
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(userDetails.name && userDetails.email && userDetails.comment){
            if (userDetails.email.includes('@')){
                let data = {
                    id: new Date().getTime().toString(),
                    name: userDetails.name,
                    email: userDetails.email,
                    comment: userDetails.comment,
                }
                setUserData((prevData)=>{
                    return [...prevData, data];
                });
                dispatch({type: 'SUCCESS'});
                setTimeout(() => {
                    dispatch({type: 'REMOVE_NOTIFICATION'});
                }, 3000);
                setUserDetails({
                    name: '',
                    comment: '',
                    email: '',
                });
            }
            else{
                dispatch({type: 'INCORRECT_EMAIL'});
                inputRef.current.focus();
                setTimeout(()=>{
                    dispatch({type: 'REMOVE_NOTIFICATION'});
                }, 3000);
            }
        }
        else{
            dispatch({type: 'ERROR'});
            setTimeout(() => {
                dispatch({type: 'REMOVE_NOTIFICATION'})
            }, 3000);
        }
    };

    const Hover = () => {
        let all_cards = document.querySelectorAll('.card');
        all_cards.forEach(item => {
            item.addEventListener('mouseover', () => {
                item.classList.add('shadow');
            });
            item.addEventListener('mouseout', () => {
                item.classList.remove('shadow')
            })
        })
    };
    return (
        <main>
            <section>
                <div>
                    <h2 className='heading'>Explore and redeem rewards for your travels with ease.</h2>
                    {/* <p className="mt-3 mb-0">Discover a variety of rewards for your travel activities, from flights to hotel stays. Start earning today! 
                        Our dedication to providing top-notch rewards and personalized service sets us apart. Your satisfaction is our priority.
                    </p> */}
                    <p className="mt-3 mb-0 text-secondary">
                        Welcome aboard our Passenger Reward System, where every journey earns you rewards beyond miles traveled!
                        Unlock a world of benefits as you explore the skies, rails, or roads. With each trip, you accumulate points that can be redeemed for exciting rewards, from free upgrades to luxurious lounges, exclusive discounts on travel essentials, and even complimentary tickets to your dream destinations.
                        But that's not all - our system is designed with you in mind.
                    </p>
                </div>
                <div>
                    <h2>Elevating Your Journey with Our Passenger Reward System</h2>
                    <p className="mt-3 mb-0 text-secondary">
                        Experience the joy of traveling while reaping the benefits of loyalty. Whether you're a frequent jet-setter, a weekend adventurer, or someone who simply loves to explore, our Passenger Reward System is your ticket to exclusive perks and privileges.
                        From the moment you sign up, you'll start earning points for every mile you cover.
                    </p>
                    {/* <Link to={'/sign-in'} className="btn btn-dark btn-sm mt-2">Join now</Link> */}
                    <hr/>
                </div>
                <div>
                    <h2 className="mb-3">Popular Choices</h2>
                    <div className="all_cards">
                    {
                        data.map((item) => {
                            const { id, name, img, reviews, text } = item;
                            return (
                                <div onMouseOver={Hover} title={name} className="card" key={id}>
                                    <div style={{background: `url(${img})`, height: '200px', backgroundSize: 'cover', backgroundPosition: 'center'}} className="card-img-top"></div>
                                    <div className="card-body">
                                        <h5 className="text-secondary">{name}</h5>
                                        <p>{text}</p>
                                    </div>
                                    <div style={{display: "flex", justifyContent: "space-between", alignItems: 'center'}} className="card-footer">
                                        <img src={k} alt="k" height={'30px'} />
                                        <span>Reviews <span>{reviews}</span></span>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                        <Link to={'/sign-in'} className="btn btn-dark text-center">Dive In <FontAwesomeIcon icon={faRocket}/></Link>
                    </div>
                    <hr/>
                </div>
                <div id="about">
                    <h2 className="text-left">About Us</h2>
                    <p className="mt-3 mb-0 text-secondary">
                        Welcome to our Passenger Reward System, where your travels are not only about reaching your destination but also about the rewarding journey you take with us.
                        Our platform is designed to elevate your travel experience by offering exclusive rewards and perks tailored to your preferences.
                    </p>
                    <hr/>
                </div>
                <div id="contact">
                    <form className="form-section bg-light">
                        <h1>Leave a Reply</h1>
                        <div>
                            <p>Your email address will not be published.<br/>Required fields are marked *</p>
                        </div>
                        <div className="fields" style={{display: 'grid'}}>
                            <label htmlFor='comment'>
                                Comment * <br/>
                                <textarea name='comment' onChange={handleFormData} value={userDetails.comment} required placeholder='Type something...' id='comment'></textarea>
                            </label>
                            <label htmlFor='name'>
                                Name * <br/>
                                <input name="name" onChange={handleFormData} value={userDetails.name} required placeholder='John Doe' type='text' id='name'/>
                            </label>
                            <label htmlFor='email'>
                                Email * <br/>
                                <input ref={inputRef} name="email" onChange={handleFormData} value={userDetails.email} placeholder='johndoe@gmail.com' type='email' id='email' required/>
                            </label>
                            <button onClick={handleFormSubmit} className='btn postComment btn-dark rounded-0 mt-3'>POST COMMENT</button>
                        </div>
                    </form>
                </div>
            </section>
            {state.failureAlert && <Notify message={'Fill in the required fields'} color={'darkgoldenrod'}/>}
            {state.successAlert && <Notify message={'Sent'} color={'teal'}/>}
            {state.faultyEmail && <Notify message={'Invalid Email'} color={'maroon'}/>}
        </main>
    )
}

export default AppMain;