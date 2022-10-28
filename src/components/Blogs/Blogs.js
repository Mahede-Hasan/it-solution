import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import useBlogs from '../../hooks/useBlogs';
import Blog from './Blog';
import './Blogs.css';
import { Link } from 'react-router-dom';

const Blogs = () => {
    const [blogs] = useBlogs()

    return (
        <div className='mx-5 py-5'>
            <h1 className='text-center my-4 text-secondary'>Blogs of Programming</h1>
            <div className='row'>
                {
                    blogs.slice(0,3).map(blog=><Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
            <button className='blog-all-btn'><span className='blog-all-icon'><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></span> <Link to='/blogs'>See All Blogs</Link></button>
        </div>
    );
};

export default Blogs;