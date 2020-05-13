import React from "react";
import "./Login.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Login() {
  return (
    <Form
      className="container mt-5 login-form"
    >
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          className="email-height"
          type="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          className="email-height"
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      
      <Button className="btn-lg btn-dark btn-block login-button">Login</Button>
    </Form>
  );
}

export default Login;
