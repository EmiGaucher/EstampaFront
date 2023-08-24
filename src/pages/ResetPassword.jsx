import React from "react";
import { NavLink } from "react-router-dom";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import NavBar from "../components/NavBar";
import loginImg from "../assets/garita.jpg";
import "./Login.css";
function ResetPassword() {
    return (
        <>
            <NavBar />

            <div className="login-container">
                <Card>
                    <Row>
                        <Col md="4">
                            <img src={loginImg} alt="login form" className="loginImg" />
                        </Col>
                        <Col md="8">
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <h5
                                    className="fw-normal my-4 pb-3 text-center"
                                    style={{ letterSpacing: "1px" }}
                                >
                                    Restablecer contraseña
                                </h5>
                                <Form.Group className="mb-4">
                                    <Form.Control type="password" placeholder="Contraseña actual" />
                                </Form.Group>
                                <Form.Group className="mb-4">
                                    <Form.Control type="password" placeholder="Contraseña nueva" />
                                </Form.Group>
                                <Form.Group className="mb-4">
                                    <Form.Control
                                        type="password"
                                        placeholder="Confirma tu contraseña"
                                    />
                                </Form.Group>
                                <Button className="btn btn-dark btn-lg mb-4">
                                    Cambiar contraseña
                                </Button>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </div>
        </>
    );
}

export default ResetPassword;
