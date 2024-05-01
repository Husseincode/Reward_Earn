import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTelegram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = ({appName}) => {
    return (
        <footer className='bg-dark text-secondary'>
            <h3 className='footer_brand text-center m-2 text-decoration-underline'>{appName}</h3>
            <div className='footer_container'>
                <div>
                    <p>Flights</p>
                    <p>Hotels</p>
                    <p>About us</p>
                </div>
                <div>
                    <p>Support</p>
                    <p>Help</p>
                    <p>Social</p>
                    {/* <p>Profession</p> */}
                </div>
                <div>
                    <p>Terms & privacy policy</p>
                </div>
            </div>
            <div className='icons text-center'>
                <div>
                    <FontAwesomeIcon className='icn' icon={faXTwitter}/>
                    <FontAwesomeIcon className='icn' icon={faFacebook}/>
                    <FontAwesomeIcon className='icn' icon={faInstagram}/>
                    <FontAwesomeIcon className='icn' icon={faTelegram}/>
                </div>
            </div>
            <div>
                <hr/>
                <p className='text-center'>{appName} <time>&copy; 2024</time></p>
            </div>
        </footer>
    )
}

export default Footer