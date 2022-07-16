import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceb } from '@fortawesome/free-solid-svg-icons'
import social1 from '../../image/Path 441.png'
import social2 from '../../image/Path 443.png'
import social3 from '../../image/Group 959.png'
import social4 from '../../image/Group 957.png'
import './Footer.css';
import { Routes, Route, Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className='Footer'>
            <p className='tabs-heading-text'>MORE</p>
            <div className="footer-tabs-row">
                <div className="nav col-md-12">
                    <ul>
                        <li className='footer-tab'><Link to="/faq">FAQ</Link></li>
                        <li className='footer-tab'><Link to="/">PRIVACY POLICY</Link></li>
                        <li className='footer-tab'><Link to="/">TERMS & CONIDTIONS</Link></li>
                        <li className='footer-tab'><Link to="/Contact">CONTACT US</Link></li>
                        <li className='footer-tab'><Link to="/">NEWS</Link></li>
                        <li className='footer-tab'><Link to="/subscribe">SUBSCRIBE</Link></li>
                    </ul>
                </div>
            </div>
            <p className='tabs-heading-text'>FOLLOW US</p>
            <div className="footer-tabs-row">
                <div className="nav col-md-12">
                    <ul>
                        <li className='footer-tab'><Link to="/">TWITTER</Link></li>
                        <li className='footer-tab'><Link to="/">FACEBOOK</Link></li>
                        <li className='footer-tab'><Link to="/">LINKEDIN</Link></li>
                        <li className='footer-tab'><Link to="/">INSTAGRAM</Link></li>
                    </ul>
                </div>
            </div>
            <div>
                <div>
                    <h5 className='copyright-text'>© 2022 Qwikio Inc All rights reserved</h5>
                </div>
            </div>
        </div>
    );
};

export default Footer;