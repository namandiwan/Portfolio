import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";

const NavbarCode = (props) => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home" id="a1">
          About Me
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" id="collapsed" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#experience" id="a1">
              Experience
            </Nav.Link>
            <Nav.Link href="#skills" id="a1">
              Skills
            </Nav.Link>
            <Nav.Link href="#education" id="a1">
              Education
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#contact" id="a1">
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarCode;
