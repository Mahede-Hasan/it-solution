import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faCode, faDiagramProject, faUsers } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './Stats.css';

const Stats = () => {
    return (
        <div>
            <div className="card-container my-5 row mx-4">
                <div className="card-box col-lg-3 col-md-5 col-sm-12">
                    <span>
                        <span><FontAwesomeIcon className='stat-icon' icon={faUsers}></FontAwesomeIcon></span>
                        <h1>30+</h1>
                        <h2>Happy Clients</h2>
                    </span>
                </div>
                <div className="card-box col-lg-3 col-md-5 col-sm-12">
                    <span>
                        <span><FontAwesomeIcon className='stat-icon' icon={faDiagramProject}></FontAwesomeIcon></span>
                        <h1>12+</h1>
                        <h2>Project Completed</h2>
                    </span>
                </div>
                <div className="card-box col-lg-3 col-md-5 col-sm-12">
                    <span>
                        <span><FontAwesomeIcon className='stat-icon' icon={faAward}></FontAwesomeIcon></span>
                        <h1>00</h1>
                        <h2>Award Achieved</h2>
                    </span>
                </div>
                <div className="card-box col-lg-3 col-md-5 col-sm-12">
                    <span>
                        <span><FontAwesomeIcon className='stat-icon' icon={faCode}></FontAwesomeIcon></span>
                        <h1>200000+</h1>
                        <h2>Line of code</h2>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Stats;