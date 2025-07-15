import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink, Outlet} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand href="#home" className='text-white'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className='nav-link text-white' to="/">Home</NavLink>
            <NavLink className='nav-link text-white' to="/prodcut">Product</NavLink>
            <NavLink className='nav-link text-white' to="/about">About</NavLink>
            <NavLink className='nav-link text-white' to="/contact">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      <Outlet />
    </div>
    </div>
  )
}

export default Header
