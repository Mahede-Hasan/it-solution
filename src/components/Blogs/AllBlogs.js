import React from 'react';
import useBlogs from '../../hooks/useBlogs';
import Blog from './Blog';
import './AllBlogs.css'

const AllBlogs = () => {
    const [blogs] = useBlogs()
    return (
        <div>
             <div className='all-blogs-container'>
            <h1 className='text-center my-2 text-secondary'>Blogs of Programming</h1>
            <div className='row'>
                {
                    blogs.map(blog=><Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
        </div>
    );
};

export default AllBlogs;