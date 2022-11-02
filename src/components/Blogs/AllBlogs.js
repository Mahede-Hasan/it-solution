import React from 'react';
import useBlogs from '../../hooks/useBlogs';
import Blog from './Blog';
import './AllBlogs.css'
import Footer from '../Shared/Footer/Footer';

const AllBlogs = () => {
    const [blogs] = useBlogs()
    return (
        <div
        >
            <div className='all-blogs-container'>
                <h1 className='text-center header-text'><span>Blogs</span> of Programming</h1>
                <div className='row'>
                    {
                        blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                    }
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default AllBlogs;