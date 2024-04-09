// Navbar.js
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faInfoCircle,
  faBook,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <Navbar variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <FontAwesomeIcon icon={faUtensils} /> La Pechá
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#acerca">
              <FontAwesomeIcon icon={faInfoCircle} /> Acerca de
            </Nav.Link>
            <Nav.Link href="#menu">
              <FontAwesomeIcon icon={faBook} /> Menú
            </Nav.Link>
            <Nav.Link href="#contacto">
              <FontAwesomeIcon icon={faEnvelope} /> Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
