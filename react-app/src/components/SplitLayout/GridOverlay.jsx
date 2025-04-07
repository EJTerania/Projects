import React from 'react';
import './GridOverlay.css';

const GridOverlay = () => {
    const projects = [
        { image: '/images/project-1.png', title: 'Youth Alliance Initiative', description: 'Empowering youth through advocacy and awareness.' },
        { image: '/images/project-2.png', title: 'Project High Five (PHF)', description: 'Spreading knowledge about HIV prevention and stigma reduction.' },
        { image: '/images/project-3.png', title: 'PROJECT AKKAP', description: 'Alagaan ang Kalusugan ng Kabataang Pilipino - Promoting youth health and well-being.' }
    ];

    return (
        <div className="grid-container">
            {projects.map((project, index) => (
                <div key={index} className="grid-item">
                    <img src={project.image} alt={project.title} />
                    <div className="overlay">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GridOverlay;
