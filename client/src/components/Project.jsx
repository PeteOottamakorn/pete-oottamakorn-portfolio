import { useState } from "react";
import { Row, Col, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function Project() {
  return (
    <Row xs={1} md={3}>
      <Col>
        <Card>
          <Card.Img variant="top"></Card.Img>
          <Card.Body>
            <Card.Title>asfasgdasfdsaf</Card.Title>
            <Card.Text>asdfasdf</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Project;
