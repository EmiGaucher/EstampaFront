import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import NavBar from "../components/NavBar";
import loginImg from "../assets/garita.jpg";
import './Login.css';

function Register() {
  return (
    <>
      <NavBar />
      
      <div className="login-container">
          <Card>
            <Row>
              <Col md='4'>
                <img src={loginImg} alt="login form" className="loginImg" />
              </Col>
              <Col md='8'>
                <Card.Body className='d-flex flex-column justify-content-center'>
                  <h5 className="fw-normal my-4 pb-3 text-center" style={{ letterSpacing: '1px' }}>
                    Registrate
                  </h5>
                  <Form.Group className="mb-4">
                    <Form.Control type="firstname" placeholder="Nombre" />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Control type="lastname" placeholder="Apellido" />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Control type="password" placeholder="Contraseña" />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Control type="password" placeholder="Confirma tu contraseña" />
                  </Form.Group>
                  <Button className="btn btn-dark btn-lg mb-4">Registrarse</Button>
                  <div className='text-center'>

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
  )
}

export default Register