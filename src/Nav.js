import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import Hamburger from './Hamburger';
import Logo from './Logo';

const Nav = () => {
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='logo'>
          <Logo />
          Jama Farah
        </div>
        <div className='menu-icon' onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/Projects'>Projects</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/Resume'>Resume</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
