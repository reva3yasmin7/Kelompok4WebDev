// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/carikerja1.png'; // Ensure the path to your logo is correct

function CustomNavbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <Navbar bg="white" expand="lg" className="py-3 shadow-sm navbar-bordered">
      <Container className="px-3">
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src={logo} alt="Logo" />
          carikerja
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto custom-nav" style={{ marginLeft: 'auto' }}>
            <Nav.Link
              as={Link}
              to="/perusahaan"
              style={{
                marginRight: '20px',
                color: isActive('/perusahaan') ? 'blue' : 'black',
              }}
            >
              Perusahaan
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/joblistings"
              style={{
                marginRight: '20px',
                color: isActive('/joblistings') ? 'blue' : 'black',
              }}
            >
              Lowongan Kerja
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              style={{
                color: isActive('/about') ? 'blue' : 'black',
              }}
            >
              Tentang
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              as={Link}
              to="/login"
              className="btn-outline-primary rounded-pill px-3 py-1 mx-1"
            >
              Masuk
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/register"
              className="btn-outline-primary rounded-pill px-3 py-1 mx-1"
            >
              Daftar
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/hr-register"
              className="btn-outline-primary rounded-pill px-3 py-1 mx-1"
            >
              Daftar Sebagai HR
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
