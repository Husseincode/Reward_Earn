import React from "react";
import './RewardMain.css'
import { data } from "../WebData/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import k from '../Assets/k.png'

/**
 * @AppMain - This returns the page of the main.
 *  @name: The Website's name
 * @returns: The App Main Component
 */
const AppMain = ({name}) => {
    return (
        <main>
            <section>
                <div>
                    <h2 className='heading'>Explore and redeem rewards for your travels with ease.</h2>
                    <p>Discover a variety of rewards for your travel activities, from flights to hotel stays. Start earning today! 
                        Our dedication to providing top-notch rewards and personalized service sets us apart. Your satisfaction is our priority.
                    </p>
                </div>
                <hr/>
                <div>
                    <h2>Popular Choices</h2>
                    <div className="all_cards">
                    {
                        data.map((item) => {
                            const { id, name, img, reviews, text } = item;
                            return (
                                <div className="card" key={id}>
                                    <h5 className="card-header text-center">{name}</h5>
                                    <div style={{background: `url(${img})`, height: '200px', backgroundSize: 'cover', backgroundPosition: 'center'}} className="card-img-top"></div>
                                    <div className="card-body">
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
            </section>
        </main>
    )
}

export default AppMain;