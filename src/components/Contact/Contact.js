import { faArrowRightLong, faEnvelope, faLocationDot, faMobileScreenButton, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Contact.css';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div style={{paddingTop: '60px'}} className='contact-container'>
            <div className='contact-title-container px-4'>
            <FontAwesomeIcon className='about-icon' icon={faArrowRightLong}></FontAwesomeIcon>
            <h2>Contact Us</h2>
            <hr className='about-line' />
            </div>
            <div className="contact-information-container row pt-5 px-5">
                <div className="contact-location col-lg-6 col-md-12">
                    <h4>Our Office</h4>
                    <div className="pt-2 text-secondary">
                        <h5>Corporate Office</h5>
                        <p><span className='pe-1'><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon></span> Address: Capital Tower Mirpur-1 Dhaka-1216</p>
                        <p><span className='pe-2'><FontAwesomeIcon icon={faMobileScreenButton}></FontAwesomeIcon></span>01704877492, 01963470991</p>
                        <p><span className='pe-2'><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></span>026997855</p>
                    </div>
                    <div className="text-secondary">
                        <h6><span className='pe-2'><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></span>Email: contact.mahede@gmail.com , mahedehasan.cd91@gmail.com</h6>
                    </div>
                </div>
                <div className="contact-form col-lg-6 col-md-12">
                <h3>Contact Info</h3>
                <h6 className='text-secondary'>IT Solution is a business software development and web design company in Bangladesh.</h6>
                <hr className='contact-line' />
                <div>
                    <ContactForm></ContactForm>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;