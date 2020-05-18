import React, { Component } from "react";
import "./Login.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleLogin = (event) => {
    event.preventDefault();
    console.log(event, "event");

    const userCredentials = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post("/api/users/userByEmail", userCredentials)
      .then((result) => {
        console.log(result, "result");

        if (result.data) {
          localStorage.setItem("isLoggedIn", "yes");
          localStorage.setItem("email", result.data.email);

          console.log("send to dashboard");
          this.props.history.push("/dashboard", { result: result.data });
        } else {
          console.log("send to login");
          this.props.history.push("/login", { result: userCredentials });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <Card className="signup-card">
            <Card.Header as="h5" className="feature-bar form-bar">
              login
            </Card.Header>
            <Card.Body>
              <Form className="container mt-5 login-form">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    className="email-height"
                    type="email"
                    name="email"
                    value={this.state.email}
                    placeholder="Enter email"
                    onChange={this.handleInputChange}
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    className="email-height"
                    name="password"
                    value={this.state.password}
                    type="password"
                    placeholder="Password"
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
                <Button
                  className="btn-lg btn-block login-button"
                  onClick={this.handleLogin}
                >
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
