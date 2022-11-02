import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Team from './Team';
import './Teams.css';

const Teams = () => {
    const [teams, setTeams] = useState([]);

    // get team data
    useEffect(() => {
        fetch('teams.json')
            .then(res => res.json())
            .then(data => setTeams(data))
    }, [])
    return (
        <div>
            <h1 className='text-center mb-4 header-text'><span>Our Expert</span> Team Member</h1>
            <div className='teams-container row mx-5'>
                {
                    teams.slice(0, 4).map(team => <Team key={team.id}
                        team={team}
                    ></Team>)
                }
            </div>

            <div>
                <button className='team-all-btn'><span className='team-all-icon'><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></span> <Link to='/teams'>See All Blogs</Link></button>
            </div>
        </div>
    );
};

export default Teams;