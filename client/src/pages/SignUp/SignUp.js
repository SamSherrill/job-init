import React from "react";
import "./SignUp.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// const FormPage = () => {
//   return (
//       <div>SignUp</div>
//   );
// };

// export default FormPage;

function SignUp() {
  return (
    <Form className="container mt-5 login-form">
      <Form.Group controlId="formBasicName">
        <Form.Label></Form.Label>
        <Form.Control
          className="name-height"
          type="name"
          placeholder="First Name"
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicLast">
        {/* <Form.Label></Form.Label> */}
        <Form.Control
          className="name-height"
          type="last"
          placeholder="Last Name"
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        {/* <Form.Label></Form.Label> */}
        <Form.Control
          className="name-height"
          type="Email"
          placeholder="Email Address"
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        {/* <Form.Label></Form.Label> */}
        <Form.Control
          className="name-height"
          type="last"
          placeholder="Password"
        />
      </Form.Group>

      <Form.Group controlId="formBasicLocation">
        {/* <Form.Label></Form.Label> */}
        <Form.Control
          className="name-height"
          type="last"
          placeholder="Location"
        />
      </Form.Group>
      <Button className="btn-lg btn-dark btn-block login-button">
        Sign up
      </Button>
    </Form>
  );
}

export default SignUp;
