import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, description, img } = service;
    return (
        <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='service-overlay-container'>
            <div style={{
                backgroundImage: `url(${img})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }} className="service">
                
                    <div className="service-content">

                        <h3 className='service-name'>{name}</h3>
                        <p className='service-description'>{description}</p>
                        <button className='service-btn'>Get Service</button>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Service;