import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Nav2.css'

const Nav2 = () => {
    const location = useLocation()
    const [bgColor, setBgColor] = useState(false);
    const [color, setColor] = useState(false)

    // navbar scrolling color change
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true);
        }
        else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

    // when click another route change the background color in navbar
    useEffect(() => {
        if (location.pathname !== '/home') {
            setBgColor('black')
        }
        else {
            setBgColor('transparent')
        }
    }
        , [location])

    // NavLink style
    let activeStyle = {
        color: 'rgb(11, 186, 244)',
        fontWeight: '700',
        textDecoration: 'underline'
    };


    return (
        <section style={{ backgroundColor: bgColor }} className={color ? 'navbar-container header-bg' : 'navbar-container'}>
            <div className=' d-flex justify-content-between align-items-start px-5 pt-4'>
                {/* logo  */}
                <div className="logo">
                    <Link to='/home'><h1 className='text-white logo-text'>IT <span>Solution</span></h1></Link>
                </div>

                {/* nav menu */}
                <div className="nav-menu-container">
                    <ul>
                        <li>
                            <NavLink to='/home' style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            } className="nav-menu">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            } className="nav-menu">About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/blogs' style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            } className="nav-menu">Blogs</NavLink>
                        </li>
                        <li>
                            <NavLink to='/services' style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            } className="nav-menu">Service</NavLink>
                        </li>
                        <li>
                            <NavLink to='team' style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            } className="nav-menu">Team</NavLink>
                        </li>
                        <li>
                            <NavLink to='/news' style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            } className="nav-menu">News & Articles</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact' style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            } className="nav-menu">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Nav2;