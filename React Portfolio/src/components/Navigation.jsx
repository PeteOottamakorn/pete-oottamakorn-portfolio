import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <>
      <Nav className="justify-content-end">
        <Nav.Item>
          <Nav.Link href="/">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/resume">Resume</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Navigation;
