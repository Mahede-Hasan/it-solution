import React, { useEffect, useState } from 'react';
import Service from './Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section className='services-container px-4'>
            <div className=''></div>
            <h1 className='service-text text-center pt-5'>OUR SERVICES</h1>
           <div className="services row">
           {
                services.map(service=> <Service key={service.id} service={service}></Service>)
            }
           </div>
        </section>
    );
};

export default Services;