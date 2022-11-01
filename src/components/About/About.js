import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './About.css';
import softwareImg from '../../images/software-img.png';
import overviewImg from '../../images/overview-img.svg';

const About = () => {
    return (
        <div style={{paddingTop: '60px'}} className='about-container'>
            <div className="about-bg-container">
           <div className="about-title d-flex align-items-center">
           <FontAwesomeIcon className='about-icon' icon={faArrowRightLong}></FontAwesomeIcon>
            <h1 className='pe-3'>About Us</h1>
           </div>
           <hr className='about-line' />
           <div className="about-sub-container row d-flex px-5">
            <img className='col-lg-6 col-md-12' src={softwareImg} alt="" />
            <p className=' pt-4 text-white col-lg-6 col-md-12'>IT Solution is a custom software development and web design company based in Dhaka, Bangladesh.Though we basically build customized software and corporate websites for various business sectors, we also provide security device solution, Graphics Design service as well as corporate IT consultency.</p>
           </div>
            </div>
            <div className="overview px-5 pt-5">
                <h6 className='text-secondary'>A little about us</h6>
                <h3>COMPANY <span>OVERVIEW</span></h3>
            </div>
            <div className="overview-content row d-flex justify-content-center px-5 pt-4">
                    <p className='pe-5 col-lg-6 col-md-12'><strong className='text-secondary col-lg-6 col-md-12'>IT SOLUTION</strong> is a leading IT solutions provider that focuses on quality, innovation, & speed. We utilized technology to bring results to grow our clients businesses. We pride ourselves in great work ethic, integrity, and end-results. Whether you have an established business, or perhaps you are just starting out on the Internet, IT Solution’s experienced team of developers and internet marketing experts will help you expand upon your client base and help bring your business the attention it deserves. Throughout the years IT Solution has been able to create stunning, award winning projects in multiple verticals while allowing our clients to meet their expectations and beyond.</p>
                    <img src={overviewImg} alt="" />
                </div>
        </div>
    );
};

export default About;