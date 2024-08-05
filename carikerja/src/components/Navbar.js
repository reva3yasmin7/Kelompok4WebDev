// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/carikerja1.png'; 

function CustomNavbar() {
    return (
      <Navbar bg="white" expand="lg" className="py-3 shadow-sm navbar-bordered">
        <Container className="px-3">
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img src={logo} alt="Logo" />
            carikerja
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto custom-nav">
  <Nav.Link href="#home">Perusahaan</Nav.Link>
  <Nav.Link href="#jobs">Lowongan Kerja</Nav.Link>
  <Nav.Link href="#about">Tentang</Nav.Link>
</Nav>
            <Nav>
              <Nav.Link href="#login" className="btn-outline-primary rounded-pill px-3 py-1 mx-1">Masuk</Nav.Link>
              <Nav.Link href="#register" className="btn-outline-primary rounded-pill px-3 py-1 mx-1">Daftar</Nav.Link>
              <Nav.Link href="#hr-register" className="btn-outline-primary rounded-pill px-3 py-1 mx-1">Daftar Sebagai HR</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default CustomNavbar;