import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import axios from "axios"; // Import Axios
import NavBar from "../components/NavBar";
import loginImg from "../assets/garita.jpg";
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { firstname, lastname, email, password, confirmPassword } = formData; // Destructure values from formData

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_BACK}users/`, {
        firstname,
        lastname,
        email,
        password,
        confirmPassword,
      });

      console.log(response.data); // Message from the server
      // Handle success, maybe redirect the user or show a success message
    } catch (error) {
      console.error("Ocurrió un error:", error);
      // Handle error, show an error message
    }
  };

  return (
    <>
      <NavBar />
      <div className="register-container">
        <Card className="fade-card register-card">
          <Row>
            <Col md="12">
              <Card.Body className="d-flex flex-column justify-content-center">
                <h5
                  className="fw-normal my-4 pb-3 text-center"
                  style={{ letterSpacing: "1px" }}
                >
                  Creá una cuenta
                </h5>
                <Form.Group className="mb-4 d-flex justify-content-between">
                  <Form.Control
                    style={{ width: "48%" }}
                    type="text"
                    placeholder="Nombre"
                    value={firstname}
                    onChange={(e) =>
                      setFormData({ ...formData, firstname: e.target.value })
                    }
                  />
                  <Form.Control
                    style={{ width: "48%" }}
                    type="text"
                    placeholder="Apellido"
                    value={lastname}
                    onChange={(e) =>
                      setFormData({ ...formData, lastname: e.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Control
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Control
                    type="password"
                    placeholder="Confirma tu contraseña"
                    value={confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Button
                  className="btn btn-dark btn-lg mb-4"
                  onClick={handleFormSubmit} // Call the form submission function
                >
                  Guardar
                </Button>
                <div className="text-center">
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

export default Register;
