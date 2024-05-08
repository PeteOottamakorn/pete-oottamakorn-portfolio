import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <Container className="main-footer container pt-4" id="footer">
      <Row className="justify-content-md-center">
        <Col></Col>
        <Col>
          <h4>Pete Oottamakorn</h4>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col>
          <p>©Copyright 2024. Made by Pete Oottamakorn</p>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Footer;
