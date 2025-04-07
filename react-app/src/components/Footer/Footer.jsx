import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section about">
                    <div class="image-container">
                        <img src="/images/tdb-logo-white.png" class="image-default" alt="Default Image" />
                        <img src="/images/tdb-logo-cyan.png" class="image-hover" alt="Hover Image" />
                    </div>
                    <p>Team Dugong Bughaw is dedicated to promoting HIV awareness and prevention through educational programs and youth engagement.</p>
                </div>

                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><Link to="/calendar" className='task-link'>Events</Link></li>
                        <li><Link to="/faq" className='task-link'>FAQ</Link></li>
                    </ul>
                </div>

                <div className="footer-section links-2">
                    <h2>Take Action</h2>
                    <ul>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/donate" className="donate-link">Donate</Link></li>
                    </ul>
                </div>

                <div className="footer-section contact-2">
                    <h2>Contact Us</h2>
                    <p>Email: hello@tdb.community</p>
                    <p>Phone: +63 995 157 8022</p>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/ProjectHIV/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://x.com/projecthiv" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://www.instagram.com/projecthiv/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Team Dugong Bughaw. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
