import { NavLink } from 'react-router-dom';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { MDBIcon } from 'mdb-react-ui-kit';
import estampalogo from '../assets/logo-chico.svg';
import "./NavBar.css"
function NavBar() {
  return (
    <Navbar sticky="top" expand="lg" className="custom-navbar">
      <Container fluid>
        <NavLink to='/'> <img className="estampa-logo" src={estampalogo} alt="estampalogo" /></NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
          </Nav>
          <Nav className="d-flex pe-4">
          <MDBIcon far icon="user" />
          <NavLink to='../login' className="custom-nav-link">Iniciar sesión</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      );
}

export default NavBar;