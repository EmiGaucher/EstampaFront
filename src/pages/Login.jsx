import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import NavBar from "../components/NavBar";
import loginImg from "../assets/garita.jpg";
import './Login.css';

function Login() {
  return (
    <>
      <NavBar />
      <div className='login-container'>
        <Card 
        className='fade-card'>
          <Row>
            <Col>
              <Card.Body className='d-flex flex-column justify-content-center' >
                <Form.Group className="mb-4">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className="btn btn-dark btn-lg mb-4">Iniciar sesión</Button>
                <div className='text-center'>
                  <div></div>
                  <NavLink className="small text-muted" to="/forgotPassword">
                    Olvidaste tu contraseña?
                  </NavLink>
                  <NavLink to="/register" style={{ color: '#393f81' }}> Registrate aquí</NavLink>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
}

export default Login;
