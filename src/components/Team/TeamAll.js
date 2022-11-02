import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Team from './Team';
import './Teams.css';

const TeamAll = () => {
    const [teams, setTeams] = useState([]);

    // get team data
    useEffect(() => {
        fetch('teams.json')
            .then(res => res.json())
            .then(data => setTeams(data))
    }, [])
    return (
        <div>
            <h1 style={{ paddingTop: '100px' }} className='text-center pb-5 header-text'><span>Our Expert</span> Team Member</h1>
            <div className='teams-container row mx-5'>
                {
                    teams.map(team => <Team key={team.id}
                        team={team}
                    ></Team>)
                }
            </div>
            <Footer></Footer>

        </div>
    );
};

export default TeamAll;