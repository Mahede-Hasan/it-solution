import { signOut } from 'firebase/auth';
import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useLocation } from 'react-router-dom';
import auth from '../../../firebase_init';
import './Nav2.css'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Nav2 = () => {
    const location = useLocation()
    const [bgColor, setBgColor] = useState(false);
    const [color, setColor] = useState(false)
    const [user] = useAuthState(auth);
    const navRef = useRef()

    // responsive navbar
    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }

    // navbar scrolling color change

    const changeColor = () => {
        if (window.scrollY >= 60) {
            setColor(true)
        }
        else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

    // when click another route change the background color in navbar
    useEffect(() => {
        if (location.pathname !== '/home' && location.pathname !== '/') {
            setBgColor('gray',)
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
    };


    const handleLogOut = () => {
        signOut(auth)
    }


    return (
        <section style={{ backgroundColor: bgColor }} className={color ? 'navbar-container header-bg' : 'navbar-container'}>
            <div className='nav-container px-5'>
                {/* logo  */}
                <div className="logo">
                    <Link to='/home'><h1 className='text-white logo-text'>IT <span>Solution</span></h1></Link>
                </div>

                {/* nav menu */}
                <div className="nav-menu-container">
                    <div className='nav-button' onClick={showNavbar}><Bars3Icon className='menu-icon'></Bars3Icon></div>
                    <ul ref={navRef}>
                        <div className='nav-button nav-close' onClick={showNavbar}><XMarkIcon className='menu-close-icon'></XMarkIcon></div>
                        <li>
                            <NavLink to='/home' style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            } className="nav-menu">Home</NavLink>
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
                            <NavLink to='/blogs' style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            } className="nav-menu">Blogs</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            } className="nav-menu">About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact' style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            } className="nav-menu">Contact</NavLink>
                        </li>

                        {/* login button  */}
                        {user ?
                            <Link onClick={handleLogOut} className='login-text'>LogOut</Link>
                            :
                            <Link className='login-text' to='/login'>Login</Link>
                        }

                    </ul>

                </div>
            </div>
        </section>
    );
};

export default Nav2;