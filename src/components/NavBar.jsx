import { NavLink } from 'react-router-dom';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import estampalogo from '../assets/logo-chico.svg';
import "./NavBar.css";

function NavBar() {

  return (
    <Navbar sticky="top" expand="lg" className="custom-navbar">
      <Container fluid>
        <NavLink to="/" className="navbar-brand"><img className="estampa-logo" src={estampalogo} alt="estampalogo" /></NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
          </Nav>
          <Nav className="d-flex pe-4">
              <NavLink to="/login" className="nav-link custom-nav-link">
              </NavLink>
              <NavLink to="/login" className="nav-link custom-nav-link">Iniciar sesión</NavLink>

          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
