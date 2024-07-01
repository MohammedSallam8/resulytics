import React from 'react'
import '../style/NavBar.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Logo from '../../public/imgs/logo.png'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='header'>
      <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand className='Nav-B' href="#"><img src={Logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
            <div className='navBar-link'>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/aboutUs">About US</NavLink>
                </li>
                <li>
                  <NavLink to="/service">Service</NavLink>
                </li>
                <li>
                  <NavLink to="/caseStudies">Case Studies</NavLink>
                </li>
                <li>
                  <NavLink to="/courses">Courses</NavLink>
                </li>
                <li>
                  <NavLink to="/blog">Blog</NavLink>
                </li>
              </ul>
            </div>
          </Nav>
          <div className='navbar-form'>
            <div className='input-container'>
              <input type='search'placeholder="Search for anything" />
                <FaSearch className='search'/>
            </div>
            <div className='btn'>
              <a href='/contact' className='link-btn'><FaArrowRight className='arr'/> Get Started</a>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar