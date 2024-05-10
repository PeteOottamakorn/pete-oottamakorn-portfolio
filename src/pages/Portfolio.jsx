import { Container, Row, Col } from "react-bootstrap";
import Project from "../components/Project";

export default function Portfolio() {
  return (
    <Container className="container pt-4">
      <Row>
        <Col></Col>
        <Col md="auto">
          <h1>Portfolio</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            architecto minima id officiis, quia aperiam reiciendis hic ut. Quod,
            reiciendis odio! A nostrum adipisci commodi saepe, ducimus odio ex
            incidunt!
          </p>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
