import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './Blog.css'

const Blog = ({blog}) => {
    const {name,description} = blog;
    return (
        
            <div className="blog-box col-lg-4 col-md-6 col-sm-12 px-4">
                <h2 className='py-2'>{name}</h2>
                <p>{description.slice(0,400)}..</p>
                <button className='blog-btn'>Learn More <span className='blog-icon'><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></span></button>
            </div>
     
    );
};

export default Blog;