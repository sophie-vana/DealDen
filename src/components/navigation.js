import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../images/Den.png';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../App.css';

function Navigation() {
    return (
        <Navbar className='navBar' expand="lg">
            <Container className='navContain'>
                {/* Logo Image */}
                <img className='denLogo' src={Logo} alt="DealDen Logo" />
                {/* Brand Name */}
                <Navbar.Brand className='brand' as={NavLink} to="/">
                    DealDen
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* Navigation Links */}
                    <Nav className="linkContain ml-auto">
                        <Nav.Link as={NavLink} className='navLink' to="/products" activeClassName="active">Products</Nav.Link>
                        <Nav.Link as={NavLink} className='navLink' to="/about" activeClassName="active">About</Nav.Link>
                        <Nav.Link as={NavLink} className='navLink' to="/contact" activeClassName="active">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
