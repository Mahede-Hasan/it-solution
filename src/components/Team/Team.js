import React from 'react';
import './Team.css'

const Team = ({team}) => {
    const {img, name, description, expert} = team;
    return (
        <div className='team-container col-lg-6 col-md-12 mx-auto'>
            <div className="img-content-container">
                <img src={img} alt="" />
                <h6>{name}</h6>
                <p><small>{expert}</small></p>
            </div>
            <div className="description-container">
                <p>{description.slice(0,260)}</p>
                <button className='team-btn'>Read More</button>
            </div>
        </div>
    );
};

export default Team;