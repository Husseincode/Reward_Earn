import React from "react";
import './RewardFooter.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";
import img from '../Assets/logo.970e3778.svg'

/**
 * @AppFooter - This returns the page of the footer.
 *  @name: The Website's name
 * @returns: The App Footer Component
 */
const AppFooter = ({name}) => {
    return (
        <footer className="bg-dark text-secondary text-center">
            <section>
                {/* <h3>{name}</h3> */}
                <img className="mb-2 image" src={img} alt={name}/>
                <div className="social_icons">
                    <FontAwesomeIcon title="Github" className="icon" icon={faGithub}/>
                    <FontAwesomeIcon title="Facebook" className="icon" icon={faFacebook}/>
                    <FontAwesomeIcon title="Twitter" className="icon" icon={faXTwitter}/>
                    <FontAwesomeIcon title="Email developer" className="icon" icon={faEnvelopeCircleCheck}/>
                </div>
                <span className="mt-2">&copy; React <time>2024</time></span>
            </section>
        </footer>
    );
}

export default AppFooter;