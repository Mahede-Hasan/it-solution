import React from 'react';
import './Story.css';
import tech from '../../images/technology.jpg';

const Story = () => {
    return (
        <section className='story-container'>

            <div className="story-content">
                <div className="story-line mx-auto">
                    <h5 className='text-secondary'>Our story</h5>
                    <div className='line'></div>
                </div>
                <div className="story-text">
                    <h1>WHO WE ARE?</h1>
                    <p className='pt-4'><strong className='text-dark'>IT SOLUTION</strong> is a leading IT solutions provider that focuses on quality, innovation, & speed. We utilized technology to bring results to grow our clients businesses. We pride ourselves in great work ethic, integrity, and end-results. Whether you have an established business, or perhaps you are just starting out on the Internet, Global (BD) IT Solution’s experienced team of developers and internet marketing experts will help you expand upon your client base and help bring your business the attention it deserves. Throughout the years Global (BD) IT Solution has been able to create stunning, award winning projects in multiple verticals while allowing our clients to meet their expectations and beyond.</p>
                    <div className="mt-5">
                        <button className='read-more-btn'>Read More</button>
                        <button className='quote-btn'>Get a Free Quote</button>
                    </div>
                </div>
            </div>
            <div className="story-img mx-5">
                <img className='' src={tech} alt="" />
            </div>

        </section>
    );
};

export default Story;