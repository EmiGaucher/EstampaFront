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
      <div className="login-container">
          <Card style={{ width: '800px' }}>
            <Row>
              <Col md='4'>
                <img src={loginImg} alt="login form" className="loginImg" />
              </Col>
              <Col md='8'>
                <Card.Body className='d-flex flex-column justify-content-center'>
                  <h5 className="fw-normal my-4 pb-3 text-center" style={{ letterSpacing: '1px' }}>
                    Inicia sesión
                  </h5>
                  <Form.Group className="mb-4">
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Button className="btn btn-dark btn-lg mb-4">Iniciar sesión</Button>
                  <div className='text-center'>
                    <NavLink className="small text-muted" to="/forgotPassword">
                      Olvidaste tu contraseña?
                    </NavLink>
                    <p className="mb-4" style={{ color: '#393f81' }}>
                      No tienes cuenta? <NavLink to="/register" style={{ color: '#393f81' }}>Registrate aquí</NavLink>
                    </p>
                    <div className="d-flex flex-column">
                      <NavLink className="small text-muted" to="#">
                        Condiciones de uso.
                      </NavLink>
                      <NavLink className="small text-muted" to="#!">
                        Política de privacidad
                      </NavLink>
                    </div>
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
