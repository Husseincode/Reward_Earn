import React from "react";
import './RewardHeader.css';
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";
import { Link } from "react-router-dom";
// import AddPage from "../AddUpPage/addPage";

/**
 * @AppHeader - This returns the page of the header.
 *  @name: The Website's name
 * @returns: The App Header Component
 */
const AppHeader = ({name}) => {
    const title = {
        home: 'Home',
        about: 'About',
        contact: 'Contact',
        dashboard: 'Dashboard',
        user: 'Sign In'
    }
    return (
        <>
        <Helmet>
            <title>{name}</title>
        </Helmet>
        <header className='AppHeader shadow-sm text-dark'>
            <nav>
                <Logo/>
                <div className="optns">
                    <Link title={title.home} className="lnk text-dark">{title.home}</Link>
                    <Link title={title.contact} className="lnk text-dark">{title.contact}</Link>
                    <Link title={title.about} className="lnk text-dark">{title.about}</Link>
                    <Link to={'/dashboard'} title={title.dashboard} className="lnk text-dark">{title.dashboard}</Link>
                    <Link className="lnk" title={title.user}>
                        <FontAwesomeIcon className="text-dark user" icon={faUserCircle}/>
                    </Link>
                </div>
                <button className="btn">
                    <FontAwesomeIcon className="icon" icon={faBars}/>
                </button>
            </nav>
        </header>
        {/* <AddPage name={name}/> */}
        </>
    )
}

export default AppHeader;