import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <Container className="container pt-4">
      <Row>
        <Col></Col>
        <Col md="auto">
          <h1>Contact</h1>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <p>
          Feel free to reach out to me! I'm available and open to any work,
          freelance or otherwise!
        </p>
      </Row>
      <Row>
        <p>Email: poottamakorn@gmail.com</p>
      </Row>
      <Row>
        <p>
          GitHub:{" "}
          <Link to="https://github.com/PeteOottamakorn">
            https://github.com/PeteOottamakorn
          </Link>
        </p>
      </Row>
    </Container>
  );
}
