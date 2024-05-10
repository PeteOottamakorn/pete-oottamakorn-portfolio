import { Container, Row, Col } from "react-bootstrap";

export default function Resume() {
  return (
    <Container className="justify-content-start">
      <Row>
        <Col></Col>
        <Col md="auto">
          <h1>Resume</h1>
          <h3>Languages</h3>
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
