import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Banner1 from '../../../images/Banner/Banner1 (2).jpg'
import Banner2 from '../../../images/Banner/Banner1 (1).jpg';
import Banner3 from '../../../images/Banner/Banner1 (3).jpg';
import './Banner.css'

const Banner = () => {
    return (
       <div className="banner">
         <Carousel fade>
            <Carousel.Item interval={2000} className='carousel-container'>
                <img
                    className="banner-img d-block w-100"
                    src={Banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className="banner-content">
                    <h1 className=''>Software Development</h1>
                    <p className='mb-3'>IT-Solutions BD A Leading Software Company In Bangladesh.</p>
                    <button className='banner-btn'>View Details</button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000} className='carousel-container'>
                <img
                    className="banner-img d-block w-100"
                    src={Banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                <div className="banner-content">
                    <h1 className=''>Web Development</h1>
                    <p className='mb-3'>IT-Solutions BD A Leading Software Company In Bangladesh.</p>
                    <button className='banner-btn'>View Details</button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000} className='carousel-container'>
                <img
                    className="banner-img d-block w-100"
                    src={Banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                <div className="banner-content">
                    <h1 className=''>Digital Marketing</h1>
                    <p className='mb-3'>IT-Solutions BD A Leading Software Company In Bangladesh.</p>
                    <button className='banner-btn'>View Details</button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
       </div>
    );
};

export default Banner;