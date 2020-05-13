import React, {useState} from "react";
import "./SignUp.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
// import FormCheck from "react-bootstrap/FormCheck";

// rename this signup old, start a new class component named signup,
// bring things over & make sure we don't break things along the way

// 1) convert to class component
// 2) keep it working
// 3) add another checkbox, hardcoded, and make sure we can correctly update state
// 4) 

// const FormPage = () => {
//   return (
//       <div>SignUp</div>
//   );
// };

// export default FormPage;

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
// Example code from Jonathan
// handleChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value,
//     });
//   };

// const renderSkills = (someSkills, startIdx, endIdx) => (
//   <div className = "row" key = {startIdx}>
//     {someSkills.slice(startIdx, endIdx).map((skill, idx) => ( 
//       console.log("skill is being console logged below:"),
//       console.log(skill),
//       <div className = "col-4" key = {idx}>
//       <Form.Check
//         custom inline label = {skill}
//         type = "checkbox"
//         id = {`id-${skill}`}
//         className = "mb-3"
//       />
//       </div>
//     ))}
//   </div>
// );

function SignUp() {
  const [HTML, setHTML] = useState(false);

  const handleCheckboxChange = (event) => {
    console.log("Logging event.target .name & .value below")
    console.log(event.target.name)
    console.log(event.target.value)
    setHTML(event.target.checked)
  };

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

  // const skills = [{
  //     name: "HTML",
  //     key: "HTML",
  //     label: "HTML",
  //   },
  //   {
  //     name: "CSS",
  //     key: "CSS",
  //     label: "CSS",
  //   },
  //   {
  //     name: "JavaScript",
  //     key: "JavaScript",
  //     label: "JavaScript",
  //   },
  //   {
  //     name: "NodeJS",
  //     key: "NodeJS",
  //     label: "NodeJS",
  //   },
  //   {
  //     name: "Express",
  //     key: "Express",
  //     label: "Express",
  //   },
  //   {
  //     name: "MySQL",
  //     key: "MySQL",
  //     label: "MySQL",
  //   },
  //   {
  //     name: "MongoDB",
  //     key: "MongoDB",
  //     label: "MongoDB",
  //   },
  //   {
  //     name: "PWA",
  //     key: "PWA",
  //     label: "PWA",
  //   },
  //   {
  //     name: "React",
  //     key: "React",
  //     label: "React",
  //   },
  // ];

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
        <h3 className="h3">Skills</h3>
      </div>
      {/* <div className="col-4">
        <Form.Check
          onChange={handleCheckboxChange}
          custom
          inline
          label="html"
          type="checkbox"
          id={`id-html`}
          className="mb-3"
          name="HTML"
          checked={HTML}
        />
      </div> */}
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
