import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  //Handle submission of contact email
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(`Entered try statement`);
      //Code to call API and send email will go here

      //Clears out the input fields upon successful submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  //Updates form with input
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Container className="container pt-4">
      <Row>
        <Col></Col>
        <Col className="text-center" md="auto">
          <h1>Contact</h1>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={handleFormChange}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handleFormChange}
              />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={5}
                onChange={handleFormChange}
              />
            </Form.Group>
            <Button variant="light" type="submit" className="contact-submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
