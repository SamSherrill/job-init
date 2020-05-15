import React from "react";
import "./UserAccount.css";
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

function UserAccount() {
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

      <Form.Group controlId="formBasicLocation">
        <Form.Control
          className="name-height location-width"
          type="Email"
          placeholder="Location"
        />
      </Form.Group>

      <div className="mb-3 text-center">
        <h3 className="h3 skills-text">Skills</h3>
      </div>
      {renderSkills(skills, 0, 3)}
      {renderSkills(skills, 3, 6)}
      {renderSkills(skills, 6, 9)}

      <br></br>

      <div className="mb-3 text-center">
        <h5 className="h5">Send me a daily email with new listings*</h5>{" "}
      </div>

      <br></br>

      <Button className="btn-lg btn-dark btn-block login-button">
        Update
      </Button>
    </Form>
  );
}

export default UserAccount;