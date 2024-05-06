import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <>
      <Nav className="justify-content-end" sticky='top'>
        <Nav.Item>
          <Nav.Link id='nav-link' href="/">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link id='nav-link' href="/portfolio">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link id='nav-link' href="/contact">Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link id='nav-link' href="/resume">Resume</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Navigation;
