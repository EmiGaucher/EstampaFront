import React from "react";
import { NavLink } from "react-router-dom";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import NavBar from "../components/NavBar";
import loginImg from "../assets/garita.jpg";
import "./Login.css";
function ForgotPassword() {
return (
    <>
            <NavBar />

            <div className="login-container">
                <Card style={{ width: '800px' }}>
                    <Row>
                        <Col md="4">
                            <img src={loginImg} alt="login form" className="loginImg" />
                        </Col>
                        <Col md="8 ">
                            <Card.Body className="d-flex flex-column justify-content-center ">
                                <h5
                                    className="fw-normal my-4 pb-3 text-center"
                                    style={{ letterSpacing: "1px" }}
                                >
                                    Recuperar contraseña
                                </h5>
                                <p>Te enviaremos un mail para que recuperes tu contraseña</p>
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