import { useState } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import Contact from "../pages/Contact";
import { Container, Nav, Navbar } from "react-bootstrap";

function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <Navbar sticky="top">
      <Container>
        <h1 id="nav-name">Pete Oottamakorn</h1>
      </Container>
      <Container className="justify-content-end">
        <Nav>
          <Nav.Item>
            <NavLink
              id="navlink"
              to="/"
              className="nav-link"
              // className={(isActive) => "nav-link" + (!isActive ? "active" : "")}
            >
              About
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              id="navlink"
              to="/portfolio"
              className="nav-link"
              // className={(isActive) => "nav-link" + (!isActive ? "active" : "")}
            >
              Portfolio
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              id="navlink"
              to="/contact"
              className="nav-link"
              // className={(isActive) => "nav-link" + (!isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              id="navlink"
              to="/resume"
              className="nav-link"
              // className={(isActive) => "nav-link" + (!isActive ? "active" : "")}
            >
              Resume
            </NavLink>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
