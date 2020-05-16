import React from "react";
import "./Login.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function Login() {
  return (
    <>
    <div className="container">
    <div className="row justify-content-center">
    <Card className="signup-card">
            <Card.Header as="h5" className="feature-bar form-bar">
              login
            </Card.Header>
            <Card.Body>
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
      <Link to = "/dashboard">
        <Button className="btn-lg btn-block login-button">Login</Button>
      </Link>
  
      {/* this.props.history.push('/dashboard'); */}
    </Form>
    </Card.Body>
        </Card>
        </div>
        </div>

      </>
  );
}

export default Login;
