import React, { Component } from "react";
import "./SignUp.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import axios from "axios";
import Card from "react-bootstrap/Card";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "NodeJS",
  "Express",
  "MySQL",
  "MongoDB",
  "PWA",
  "React",
];

class SignUp extends Component {
  state = {
    checkboxes: skills.reduce(
      (options, option) => ({
        ...options,
        [option]: false,
      }),
      {}
    ),
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleCheckboxChange = (changeEvent) => {
    const { name } = changeEvent.target;
    console.log(name);

    this.setState((prevState) => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name],
      },
    }));
  };

  handleFormSubmit = (
    formSubmitEvent,
    firstName,
    lastName,
    email,
    password,
    location
  ) => {
    formSubmitEvent.preventDefault();
    
    

    Object.keys(this.state.checkboxes)
      .filter((checkbox) => this.state.checkboxes[checkbox])
      .forEach((checkbox) => {
        console.log(checkbox, "is selected.");
      });

    axios
      .post("/api/users", {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        location: this.state.location,
        skills: this.state.checkboxes
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });

      this.props.history.push('/dashboard');
  };

  renderSkills = (someSkills, startIdx, endIdx) => (
    <div className="row" key={startIdx}>
      {someSkills.slice(startIdx, endIdx).map((skill, idx) => (
        <div className="col-4" key={idx}>
          <Form.Check
            custom
            inline
            label={skill}
            isSelected={this.state.checkboxes[skill]}
            onChange={this.handleCheckboxChange}
            key={skill}
            name={skill}
            type="checkbox"
            id={`id-${skill}`}
            className="mb-3"
          />
        </div>
      ))}
    </div>
  );

  render() {
    return (
      <>
      <div className="container">
        <div className="row justify-content-center">
          
      <Card className="signup-card">
              <Card.Header as="h5" className="feature-bar form-bar">
                sign up
              </Card.Header>
              <Card.Body>
      <Form className="container mt-5 login-form">
        <Form.Group controlId="formBasicName">
          <Form.Control
            className="name-height"
            type="firstName"
            placeholder="First Name"
            name="firstName"
            value={this.state.firstName}
            onChange = {this.handleInputChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicLast">
          <Form.Control
            className="name-height"
            type="lastName"
            placeholder="Last Name"
            name="lastName"
            value={this.state.lastName}
            onChange = {this.handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Control
            className="name-height"
            type="email"
            placeholder="Email Address"
            name="email"
            value={this.state.email}
            onChange = {this.handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control
            className="name-height"
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange = {this.handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicLocation">
          <Form.Control
            className="name-height"
            type="location"
            placeholder="Location"
            name="location"
            value={this.state.location}
            onChange = {this.handleInputChange}
          />
        </Form.Group>

        <div className="mb-3 text-center">
          <h3 className="h3 skills-text">skills</h3>
        </div>
        <div className="skills-checks">
        {this.renderSkills(skills, 0, 3)}
        {this.renderSkills(skills, 3, 6)}
        {this.renderSkills(skills, 6, 9)}
        </div>

        <Button
          onClick={this.handleFormSubmit}
          className="btn-lg btn-dark btn-block login-button"
        >
          Sign Up
        </Button>
        </Form>
        </Card.Body>
        </Card>
        </div>
        </div>

      </>
    );
  }
}

export default SignUp;
