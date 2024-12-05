import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './SiteNavbar.css';
import { Spin as Hamburger } from 'hamburger-react';
import Logo from './Logo';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function SiteNavbar() {
  const location = useLocation();
  const [isOpen, setOpen] = useState(false);
  return (
    <div className='navbar'>
      <Navbar variant='dark' expand='sm' className='bg-body-tertiary'>
        <Container className='navContainer'>
          <div className='logo'>
            <Logo />
            <Navbar.Brand href='/'>Jama Farah</Navbar.Brand>
          </div>
          <div className='navContent'>
            <Navbar.Toggle
              className='navBurger'
              aria-controls='basic-navbar-nav'
            >
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </Navbar.Toggle>
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav activeKey={location.pathname} className='me-auto'>
                <Nav.Link className='navLink' href='/' eventKey='/'>
                  Home
                </Nav.Link>
                <Nav.Link
                  eventKey='/about'
                  className='navLink'
                  href='/about'
                  activeClassName='active'
                >
                  About Me
                </Nav.Link>
                <Nav.Link
                  eventKey='/projects'
                  className='navLink'
                  href='/projects'
                  activeClassName='active'
                >
                  Projects
                </Nav.Link>
                <Nav.Link className='navLink' href='/resume'>
                  <Button className='resumeButton'>Resume</Button>
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
