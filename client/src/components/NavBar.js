import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/NRLFanZone.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
// import {
//   BrowserRouter as Router
// } from "react-router-dom";

export const NavBar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    // <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" style={{width:'250px', }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              {/* <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#teams" className={activeLink === 'teams' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('teams')}>Teams</Nav.Link> */}
              {/* <Nav.Link href="/skills" className={activeLink === 'teams' ? 'active navbar-link' : 'navbar-link'}>Skills Link New</Nav.Link> */}
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.youtube.com/@NRL"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/nrl/"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/nrl/channel/"><img src={navIcon3} alt="Instagram" /></a>
              </div>
              
              <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>

              <Link to='/register'>
                <button className="vvd"><span>Members Area</span></button>
              </Link>

              </>
          )}
        </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    // </Router>
  )
}
