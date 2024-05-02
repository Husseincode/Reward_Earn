import React, { useState } from 'react'
import './main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Notification from '../../Notification/notification';
import { data } from '../Data/data';

const AppMain = () => {
    const [user_name, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [userData, setUserData] = useState([]);
    const [showFailureAlert, setShowFailureAlert] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [postComment, setPostComment] = useState()

    const cardEffect = () => {
        let all_cards = document.querySelectorAll('.card');
        all_cards.forEach(card => {
            card.addEventListener('mouseover', ()=>{
                card.setAttribute('class', 'card shadow');
            });
            card.addEventListener('mouseout', ()=>{
                card.setAttribute('class', 'card');
            })
        })
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (user_name && email && comment){
            const id = new Date().getMilliseconds().toString();
            setUserData((prevData) => {
                return [...prevData, { user_name, email, comment, id}]
            });
            const mailToLink = `mailto:${email}?subject=${encodeURIComponent(user_name)}&body=${encodeURIComponent(comment)}`
            window.location.href = mailToLink
            setShowSuccessAlert(true);
            setTimeout(() => {
                setShowSuccessAlert(false)
            }, 3000);
            setUserName('');
            setEmail('');
            setComment('');
        }
        else{
            //raise warning
            setShowFailureAlert(true);
            setTimeout(() => {
                setShowFailureAlert(false);
            }, 3000);
        }
    }
    return(<>
    <main className='sections'>
        <section>
            {/* <button className='btn btn-dark btn-sm'>Filter</button> */}
            <div>
                <h1 className='title' style={{margin: '15px 0px'}}>Explore and redeem rewards for your travels with ease</h1>
                <p>Discover a variety of rewards for your travel activities, from flights to hotel stays. Start earning today!
                Our dedication to providing top-notch rewards and personalized service sets us apart. Your satisfaction is our priority.
                </p>
            </div>
        </section>
        <hr/>
        <section>
            <h2 className='text-center'>Popular Choices</h2>
            <div className='carousel'>
                {data.map((item) => {
                    const { id, name, img, reviews, text } = item;
                    return (
                        <div onMouseOver={cardEffect} className='card' key={id}>
                            <p className='card-header text-center'>{name}</p>
                            <div style={{background: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'contain'}} className='card-img-top'></div>
                            <div className='card-body'>
                                <p className='card-text text-center p-2'>{text}</p>
                            </div>
                            <div className='card-footer'>
                                <div className='text-warning'>
                                    <FontAwesomeIcon icon={faStar}/>
                                </div>
                                <span className='text-secondary'>Reviews {reviews}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
        <hr/>
        <section>
            <h2>Explore</h2>
            <div>
                <p>Discover a world of travel options and experiences waiting for you! New offers and destinations added regularly. Start exploring now!</p>
            </div>
            <button className='btn btn-dark btn-sm'>Explore!</button>
        </section>
        <hr/>
        <section className='bg-light form_section'>
            <form>
                <h1>Leave a Reply</h1>
                <div>
                    <p>Your email address will not be published.<br/>Required fields are marked *</p>
                </div>
                <div className='input_sections'>
                    <label htmlFor='comment'>
                        Comment * <br/>
                        <textarea onChange={(e) => {
                            setComment(e.target.value)
                        }} value={comment} required placeholder='Type something...' id='comment'></textarea>
                    </label>
                    <label htmlFor='name'>
                        Name * <br/>
                        <input onChange={(e) => {
                            setUserName(e.target.value)
                        }} value={user_name} required placeholder='John Doe' type='text' id='name'/>
                    </label>
                    <label htmlFor='email'>
                        Email * <br/>
                        <input onChange={(e)=>{
                            setEmail(e.target.value)
                        }} value={email} placeholder='johndoe@gmail.com' type='email' id='email' required/>
                    </label>
                    <button onClick={handleFormSubmit} className='btn postComment btn-dark rounded-0'>POST COMMENT</button>
                </div>
            </form>
        </section>
    </main>
    {showFailureAlert && <Notification message={'Please, fill out the fields...'} color={'maroon'}/>}
    {showSuccessAlert && <Notification message={'Posted'} color={'teal'}/>}
    </>)
}

export default AppMain;