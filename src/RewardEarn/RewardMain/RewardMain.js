import React, { useReducer, useState } from "react";
import './RewardMain.css'
import { data } from "../WebData/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Notify from "../Notification/Notification";
import reducer from "../Reducer/useReducer";
import { initialData } from "../Reducer/initialData";

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
    // const [postComment, setPostComment] = useState();

    const handleFormData = (e) => {
        const { name, value } = e.target;
        setUserDetails((prevValue) => ({...prevValue, [name]: value}))
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(userDetails.name && userDetails.email && userDetails.comment){
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
            })
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
                item.classList.add('shadow-sm');
            });
            item.addEventListener('mouseout', () => {
                item.classList.remove('shadow-sm')
            })
        })
    };
    return (
        <main>
            <section>
                <div>
                    <h1 className='heading'>Explore and redeem rewards for your travels with ease.</h1>
                    <p className="mt-3 mb-0">Discover a variety of rewards for your travel activities, from flights to hotel stays. Start earning today! 
                        Our dedication to providing top-notch rewards and personalized service sets us apart. Your satisfaction is our priority.
                    </p>
                </div>
                <hr/>
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
                                    <div style={{display: "flex", justifyContent: "space-between"}} className="card-footer">
                                        <FontAwesomeIcon className="text-warning" icon={faStar}/>
                                        <p>Reviews <span>{reviews}</span></p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                    <hr/>
                </div>
                <div>
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
                                <input name="email" onChange={handleFormData} value={userDetails.email} placeholder='johndoe@gmail.com' type='email' id='email' required/>
                            </label>
                            <button onClick={handleFormSubmit} className='btn postComment btn-dark rounded-0 mt-3'>POST COMMENT</button>
                        </div>
                    </form>
                </div>
            </section>
            {state.failureAlert && <Notify message={'Fill in the required fields'} color={'darkgoldenrod'}/>}
            {state.successAlert && <Notify message={'Sent'} color={'teal'}/>}
        </main>
    )
}

export default AppMain;