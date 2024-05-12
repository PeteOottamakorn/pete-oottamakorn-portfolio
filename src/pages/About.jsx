import { Container, Row, Col, Image } from "react-bootstrap";

export default function About() {
  return (
    <Container className="container pt-4">
      <Row>
        <Col>
          <Image />
        </Col>
        <Col className="text-center" md="auto">
          <h1>Hello there!</h1>
          <p>
            My name is Pete! I'm a full stack web developer with a preference
            for front-end coding. My front-end skill set focuses on React and
            Bootstrap accented with my knowledge of Javascript, HTML, and CSS.
          </p>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
