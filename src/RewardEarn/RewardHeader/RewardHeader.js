import React, { useState } from "react";
import './RewardHeader.css';
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import img from '../Assets/logo.970e3778.svg';
import AddPage from "../AddUpPage/addPage";

/**
 * @AppHeader - This returns the page of the header.
 *  @name: The Website's name
 * @returns: The App Header Component
 */
const AppHeader = ({name}) => {
    const [title, setTitle] = useState({
        home: 'Home',
        about: 'About',
        contact: 'Contact',
        dashboard: 'Dashboard',
        user: 'Sign In'
    })
    return (
        <>
        <Helmet>
            <title>{name}</title>
            <link rel="icon" type="image/png" href={img}/>
        </Helmet>
        <header className='AppHeader shadow-sm text-dark'>
            <nav>
                <img title={name} src={img}/>
                <div className="optns">
                    <span title={title.home}>{title.home}</span>
                    <span title={title.about}>{title.about}</span>
                    <span title={title.contact}>{title.contact}</span>
                    <span title={title.dashboard}>{title.dashboard}</span>
                    <span title={title.user}>
                        <FontAwesomeIcon className="text-dark user" icon={faUserCircle}/>
                    </span>
                </div>
                <button className="btn">
                    <FontAwesomeIcon className="icon" icon={faBars}/>
                </button>
            </nav>
        </header>
        <AddPage/>
        </>
    )
}

export default AppHeader;