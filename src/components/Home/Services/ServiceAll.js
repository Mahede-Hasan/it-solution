import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Service from './Service';
import './Services.css'

const ServiceAll = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <section className='services-container px-4'>
                <div className=''></div>
                <h1 style={{ paddingTop: '100px' }} className='service-text text-center header-text'><span>OUR</span> SERVICES</h1>
                <div className="services row">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default ServiceAll;