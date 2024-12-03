import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SiteNavbar.css';
import Hamburger from './Hamburger';
import Logo from './Logo';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function SiteNavbar() {
  return (
    <div className='navbar'>
      <Navbar variant='dark' expand='lg' className='bg-body-tertiary'>
        <Container className='navContainer'>
          <div className='logo'>
            <Logo />
            <Navbar.Brand href='#home'>Jama Farah</Navbar.Brand>
          </div>
          <div className='navContent'>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link className='navLink' href='/'>
                  Home
                </Nav.Link>
                <Nav.Link className='navLink' href='/about'>
                  About Me
                </Nav.Link>
                <Nav.Link className='navLink' href='/projects'>
                  Projects
                </Nav.Link>
                <Nav.Link className='navLink' href='/resume'>
                  Resume
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default SiteNavbar;
