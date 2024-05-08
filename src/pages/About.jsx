import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About() {
  return (
    <Container className="container pt-4">
      <Row>
        <Col></Col>
        <Col xs={9}>
          <div>
            <h1>Hello there!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              architecto minima id officiis, quia aperiam reiciendis hic ut.
              Quod, reiciendis odio! A nostrum adipisci commodi saepe, ducimus
              odio ex incidunt!
            </p>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
