import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Contact from "../pages/Contact";
import { Container, Nav, Navbar } from "react-bootstrap";

function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <Navbar sticky="top">
      <h1 id="nav-name">Pete Oottamakorn</h1>
      <Container className="justify-content-end">
        <Nav>
          <Nav.Item>
            <Nav.Link id="nav-link" href="/">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link id="nav-link" href="/portfolio">
              Portfolio
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link id="nav-link" href="/contact">
              Contact
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link id="nav-link" href="/resume">
              Resume
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
