import React from 'react';
import './WorksPolicy.css';

const WorksPolicy = () => {
    return (
        <section className='my-5 mx-2'>
            <h1 className='work-title text-center'>How It Works?</h1>
            <p className='text-center work-sub-title'>Get awesome result for your next project</p>
            <div className="work-container row mx-2 mt-4">
                <div className="box col-lg-4 col-md-6 col-sm-12 gx-4 gb--5">
                    <h2> ANALYSIS</h2>
                    <p>We will work with the client to determine the features & the scope of the project and timeline to fulfill the requirements. Client collaboration is essential in this stage</p>
                </div>
                <div className="box col-lg-4 col-md-6 col-sm-12">
                    <h2> CONSULTATION</h2>
                    <p>Based on the proposed and agreed idea we will start to design wire framing of the project using the latest tools and technologies</p>
                </div>
                <div className="box col-lg-4 col-md-6 col-sm-12">
                    <h2> DESIGNING</h2>
                    <p>Based on the client needs, we will create some mock-up designs of the project so that client can easily take decision regarding the look and feel</p>
                </div>
                <div className="box col-lg-4 col-md-6 col-sm-12">
                    <h2> DEVELOPMENT</h2>
                    <p>After the client has chosen the design, we will start to code the project in-house by our expert developers to meet the time-frame requirement</p>
                </div>
                <div className="box col-lg-4 col-md-6 col-sm-12">
                    <h2> TESTING</h2>
                    <p>After the complete development of the project, this is a crucial stage where we will perform detailed testing to fix bugs if there is any.</p>
                </div>
                <div className="box col-lg-4 col-md-6 col-sm-12">
                    <h2> DEPLOYMENT</h2>
                    <p>Finally we will execute the project for client on the online server or client end server. We can also provide monitoring and maintenance support for the project.</p>
                </div>
            </div>
        </section>
    );
};

export default WorksPolicy;