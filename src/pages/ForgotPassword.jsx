import React from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import NavBar from "../components/NavBar";
import "./Login.css";
function ForgotPassword() {
return (
    <>
            <NavBar />
            <div className="login-container fade-card">
                <Card>
                    <Row>
                        <Col>
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <h5
                                    className="fw-normal my-4 pb-3 text-center"
                                    style={{ letterSpacing: "1px" }}                                >
                                    Recuperar contraseña
                                </h5>
                                <p>Te enviaremos un mail de recuperación</p>
                                <Form.Group className="mb-4">
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>
                                <Button className="btn btn-dark btn-lg mb-4">
                                    Enviar mail
                                </Button>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </div>
        </>
  )
}

export default ForgotPassword