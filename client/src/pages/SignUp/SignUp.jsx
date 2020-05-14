import React, { Component } from "react";
import "./SignUp.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

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
  };
  //   Form = ({ error, handleCheckboxChange }) => {
  //       const [HTML, setHTML] = useState(false)
  //   };

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

  handleFormSubmit = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();

    Object.keys(this.state.checkboxes)
      .filter((checkbox) => this.state.checkboxes[checkbox])
      .forEach((checkbox) => {
        console.log(checkbox, "is selected.");
      });
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
      <Form className="container mt-5 login-form">
        <Form.Group controlId="formBasicName">
          <Form.Control
            className="name-height"
            type="name"
            placeholder="First Name"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicLast">
          <Form.Control
            className="name-height"
            type="last"
            placeholder="Last Name"
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Control
            className="name-height"
            type="Email"
            placeholder="Email Address"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control
            className="name-height"
            type="last"
            placeholder="Password"
          />
        </Form.Group>

        <InputGroup className="mb-3">
          <FormControl aria-label="Text input with checkbox" />
          <InputGroup.Prepend>
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
          </InputGroup.Prepend>
        </InputGroup>

        <div className="mb-3 text-center">
          <h3 className="h3 skills-text">Skills</h3>
        </div>
        {/* <div className="col-4">
          <Form.Check
            onChange={this.handleCheckboxChange}
            custom
            inline
            label="HTML"
            type="checkbox"
            id={`id-html`}
            className="mb-3"
            name="HTML"
            checked={this.state.checkboxes[0].checked}
          />
        </div> */}
        {this.renderSkills(skills, 0, 3)}
        {this.renderSkills(skills, 3, 6)}
        {this.renderSkills(skills, 6, 9)}
        <Button
          onClick={this.handleFormSubmit}
          className="btn-lg btn-dark btn-block login-button"
        >
          Sign Up
        </Button>
      </Form>
    );
  }
}

export default SignUp;
