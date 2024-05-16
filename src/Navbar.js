import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


import { useNavigate, useLocation } from "react-router-dom";


import './App.css';


function Navigation() {
const navigate = useNavigate();
const location = useLocation();


const navigateToHome = () => {
  navigate('/');
}
const navigateToWork = () => {
  navigate('/Work');
};

const navigateToBiography = () => {
  navigate('/Biography');
};

const navigateToContact = () => {
  navigate('/Contact');
};

    return(
        <div className="Navbar" >
 <Navbar  fixed="top" bg="light" data-bs-theme="light" expand="md" >
        <Container >
          <Navbar.Brand className="logo" href="#home">Akissi Beukman</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" style={{ border: 'none', hover: 'none'}} />
          <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="nav-links me-auto" >
            <Nav.Link onClick={navigateToHome} style={{ padding: '1.5rem'}} href='/Home' >Home</Nav.Link>
            <Nav.Link onClick={navigateToWork} style={{ padding: '1.5rem' }} active={location.pathname === '/Work' }>Artworks</Nav.Link>
            <Nav.Link onClick={navigateToBiography} style={{ padding: '1.5rem' }} active={location.pathname === '/Biography'}>Biography</Nav.Link> 
            <Nav.Link onClick={navigateToContact} style={{padding: '1.5rem'}} active={location.pathname === '/Contact'}> Contact </Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    );
}

export default Navigation;
