import './Header.css';
import EventCalendar from '../EventCalendar/EventCalendar';
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import FAQ from '../FAQ/FAQ';
import ContactForm from '../ContactForm/ContactForm';
import DirectDonations from '../DirectDonations/DirectDonations';
import { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="website-header">
            <div className="header-links">
                <nav className="nav-bar">
                    
                    <div className="logo">
                        <img src="/images/tdb-logo-cyan.png" alt="tdb-icon" />
                    </div>  

                    <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>

                    <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
                        <li className="nav-item">
                            <Link to="/" className="add-link" onClick={closeMenu}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/calendar" className="task-link" onClick={closeMenu}>Events</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/faq" className="task-link" onClick={closeMenu}>FAQ</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="contact-link" onClick={closeMenu}>Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/donate" className="donate-link" onClick={closeMenu}>Donate</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/calendar" element={<EventCalendar />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/contact" element={<ContactForm />} />
                    <Route path="/donate" element = {<DirectDonations/>}/>
                </Routes>
            </div>
        </header>
    );
};

export default Header;
