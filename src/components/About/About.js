import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './About.css';

const About = () => {
    return (
        <div style={{paddingTop: '140px'}} className='about-container d-flex align-items-center'>
            <FontAwesomeIcon className='about-icon' icon={faArrowRightLong}></FontAwesomeIcon>
            <h1 className='pe-3'>About Us</h1>
        </div>
    );
};

export default About;