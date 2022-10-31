import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Team from './Team';
import './Teams.css';

const TeamAll = () => {
    const [teams , setTeams] = useState([]);

    // get team data
    useEffect(()=>{
        fetch('teams.json')
        .then(res=>res.json())
        .then(data=>setTeams(data))
    },[])
    return (
        <div>
        <h2 style={{paddingTop: '140px'}} className='text-center text-secondary pb-4'>Our Expert Team Member</h2>
            <div className='teams-container row mx-5'>
                {
                    teams.map(team=><Team key={team.id}
                    team={team}
                    ></Team>)
                }
            </div>
            
        </div>
    );
};

export default TeamAll;