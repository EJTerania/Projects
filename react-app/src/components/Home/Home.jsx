import "./Home.css";
import { Link } from 'react-router-dom';
import React from 'react';
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import GridOverlay from "../SplitLayout/GridOverlay";

const Home = () => {

    return (
        <>
            <section className="hero-section">
                <div className="hero-section-container"> 
                    <div className="text-container">
                        <h1>KNOW THE SCIENCE STOP <br/>THE STIGMA</h1>
                    </div>
                    <div className="text-container-2">
                        <h1>A non-profit organization in Iloilo City</h1>
                        <p>Team Dugong Bughaw, Inc. is a nonprofit youth organization in Iloilo City 
                            that started as a university project advocating for HIV awareness among Filipino youth.</p>
                            <button class="btn"><Link to="/donate" className="donate-link">Donate</Link></button>
                            
                           
                    </div>
                </div>

                <div className="air-container">
                        <div className='air air1'></div>
                        <div className='air air2'></div>
                        <div className='air air3'></div>
                        <div className='air air4'></div>
                </div>

            </section>
            <section className="about-section">
                <div className="about-section-container">
                    <div className="about-description">
                        <h2>Team Dugong Bughaw (TDB) 
                        </h2>
                        <p>
                            is a non-profit youth organization 
                            dedicated to promoting HIV awareness, prevention, and mental well-being. 
                            Founded in Iloilo City, TDB empowers young individuals to engage in meaningful 
                            conversations about sexual health, HIV prevention, and social stigma. 
                            Through educational programs, peer-to-peer training, and community outreach, 
                            TDB strives to build a more informed and stigma-free society. Our mission is 
                            to inspire youth to become advocates for positive change, fostering a future 
                            where compassion, education, and acceptance thrive.</p>
                        <button className="btn-about-section"><Link to="/faq" className='about-section-btn-faq'>Learn More</Link></button>
                    </div>
                    <div className="about-image">
                        <img src="/images/about-section-image.jpg" alt="image"/>                     
                    </div> 
                </div> 
                         
            </section>
            
            <section className="services-section">

                <div className="flipped-wave air air1"></div>
                <div className="flipped-wave air air2"></div>
                <div className="flipped-wave air air3"></div>
                <div className="flipped-wave air air4"></div>

                <div className="services-section-container">
                    <div className="services-text-container">
                        <h2>Our Services</h2>
                    </div>
                </div>
                <ImageCarousel/>  

                <div className="normal-wave">
                    <div className="air air1"></div>
                    <div className="air air2"></div>
                    <div className="air air3"></div>
                    <div className="air air4"></div>
                </div>
            </section>

            <section className="projects-section">
                <div className="projects-container">
                    <h2>Projects</h2>                    
                </div>
                <br/>
                <GridOverlay/>
            </section>

        </>
    )
}

export default Home;