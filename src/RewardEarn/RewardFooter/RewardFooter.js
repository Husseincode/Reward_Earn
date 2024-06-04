/* eslint-disable no-fallthrough */
import React from "react";
import './RewardFooter.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Logo from "../RewardHeader/Logo";
import { openLink } from "./links";

/**
 * @AppFooter - This returns the page of the footer.
 *  @name: The Website's name
 * @returns: The App Footer Component
 */
const AppFooter = ({name}) => {
    return (
        <footer className="bg-dark text-secondary text-center">
            <section>
                <Logo/>
                <div className="social_icons mt-3">
                    <FontAwesomeIcon onClick={()=>{openLink('Github')}} title="Github" className="icon" icon={faGithub}/>
                    <FontAwesomeIcon onClick={()=>{openLink('Facebook')}} title="Facebook" className="icon" icon={faFacebook}/>
                    <FontAwesomeIcon onClick={()=>{openLink('Twitter')}} title="Twitter" className="icon" icon={faXTwitter}/>
                    <FontAwesomeIcon onClick={()=>{openLink('Email')}} title="Email developer" className="icon" icon={faEnvelopeCircleCheck}/>
                </div>
                <span className="mt-2">&copy; React <time>2024</time></span>
            </section>
        </footer>
    );
}

export default AppFooter;