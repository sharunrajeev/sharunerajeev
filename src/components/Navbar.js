import logo from '../assets/logo.png';
import React from 'react';
import './sass/navbar.sass';

const Navbar = () => {
    return (
        <>
            <header id='navbar'>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                </div>
                {/* <input type="checkbox" className='toggle' id="nav-toggle" /> */}
                <label htmlFor="nav-toggle" id='nav-toggle-label'>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </label>
                <nav>
                    <ul>
                        <li>
                            <a href="#home"><h3>HOME</h3></a>
                        </li>
                        <li>
                            <a href="#about"><h3>ABOUT</h3></a>
                        </li>
                        <li>
                            <a href="#project"><h3>PROJECTS</h3></a>
                        </li>
                        <li>
                            <a href="#skills"><h3>SKILLS</h3></a>
                        </li>
                        <li>
                            <a href="#contact"><h3>CONTACT ME</h3></a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Navbar;