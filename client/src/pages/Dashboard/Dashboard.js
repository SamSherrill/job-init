import React, { Component } from "react";
import "./Dashboard.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";

class Dashboard extends Component {
  state = {
    jobResults: [],
  };

  componentDidMount() {

    if (this.props && this.props.location && this.props.location.state) {
      this.getUserSkills(this.props.location.state.result);
    } else {
      console.log("No user was logged in");
    }
  }

  getUserSkills = (user) => {
    axios
      .post("/api/users/userById", {_id: user._id})
      .then((response) => {
        // console.log(response.data);

        const userSkillsAndLocation = response.data;

        this.getJobResult(userSkillsAndLocation);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getJobResult = (currentUser) => {
    
    function buildQueryURL() {
        const skillsArray = Object.keys(currentUser.skills).filter((checkbox) => currentUser.skills[checkbox])
        const sectionToReturn = skillsArray.join("%20")
        console.log(sectionToReturn);
        return sectionToReturn;
      }
    
    var skillsQuerySection = ""
    skillsQuerySection = buildQueryURL();
    console.log(skillsQuerySection);

    axios
      .get(
        `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=e61b06cb&app_key=0f4b8fc49b430d828c3c2a0b28246429&results_per_page=20&what=${skillsQuerySection}%20developer&content-type=application/json`
      )
      .then((response) => {
        // console.log(response.data.results);
        this.setState({
          jobResults: response.data.results,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <br></br>
        <div className="container">
          <h4 className="text-center dash-heading">custom job listings</h4>
        </div>

        <div className="container">
          {this.state.jobResults.map((result) => (
            <Card className="result-card" key={result.id}>
              <Card.Header as="h5" className="feature-bar">
                <div dangerouslySetInnerHTML={{ __html: result.title }}></div>
              </Card.Header>
              <Card.Body>
                <Card.Title>{result.company.display_name}</Card.Title>
                <Card.Text>{result.location.display_name}</Card.Text>
                <hr></hr>
                <Card.Text>
                  <span
                    dangerouslySetInnerHTML={{ __html: result.description }}
                  ></span>
                </Card.Text>
                <div className="text-center">
                  <a href={result.redirect_url}>
                    <Button className="btn listing-button ">
                      Full Job Listing
                    </Button>
                  </a>
                  <Button className="btn save-button">Save Job</Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </>
    );
  }
}

export default Dashboard;
