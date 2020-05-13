import React from "react";
import "./SignUp.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";


const renderSkills = (someSkills, startIdx, endIdx) => (
  <div className="row" key={startIdx}>
    {someSkills.slice(startIdx, endIdx).map((skill, idx) => (
      <div className="col-4" key={idx}>
        <Form.Check
          custom
          inline
          label={skill}
          type="checkbox"
          id={`id-${skill}`}
          className="mb-3"
        />
      </div>
    ))}
  </div>
);

function SignUp() {
  const skills = [
    "Html",
    "CSS",
    "JavaScript",
    "NodeJS",
    "Express",
    "MySQL",
    "MongoDB",
    "PWA",
    "React",
  ];

  return (
    <Form className="container mt-5 login-form">
      <h3>Create Your Free Profile Today!</h3>
      <br></br>
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
      {renderSkills(skills, 0, 3)}
      {renderSkills(skills, 3, 6)}
      {renderSkills(skills, 6, 9)}
      <Button className="btn-lg btn-dark btn-block login-button">
        Sign Up
      </Button>
    </Form>
  );
}

export default SignUp;
