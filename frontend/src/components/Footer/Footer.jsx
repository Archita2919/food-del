import React from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className='footer' id='footer'>
            {location.pathname === '/contact' ? ( // Check if the current route is Contact Us page
                <p className="footer-copyright">
                    Copyright 2024 © 2024 Foody Fiesta.com - All Right Reserved.
                </p>
            ) : (
                <>
                    <div className="footer-content">
                        <div className="footer-content-left">
                            <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
                            <p>Satisfying your cravings, one delivery at a time! We bring fresh, delicious meals straight to your door. Enjoy fast and reliable services. </p>
                            <div className="footer-social-icons">
                                <img src={assets.facebook_icon} alt="" />
                                <img src={assets.twitter_icon} alt="" />
                                <img src={assets.linkedin_icon} alt="" />
                            </div>
                        </div>
                        <div className="footer-content-center">
                            <h2>COMPANY</h2>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li>About us</li>
                                <li>Delivery</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div className="footer-content-right">
                            <h2>GET IN TOUCH</h2>
                            <ul>
                                <li>+919025884712</li>
                                <li>support@foodyfiesta.com</li>
                            </ul>
                            <button className="contact-button" onClick={() => navigate('/contact')}>
                                <h3>Contact Us</h3>
                            </button>
                        </div>
                    </div>
                    <hr />
                    <p className="footer-copyright">
                        Copyright 2024 © 2024 Foody Fiesta.com - All Right Reserved.
                    </p>
                </>
            )}
        </div>
    );
};

export default Footer;
