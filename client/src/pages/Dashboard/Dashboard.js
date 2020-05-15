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
    this.getJobResult();
  }

  getJobResult = () => {
    axios
      .get(
        `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=e61b06cb&app_key=0f4b8fc49b430d828c3c2a0b28246429&results_per_page=20&what=javascript%20developer&content-type=application/json`
      )
      .then((response) => {
        console.log(response.data.results);
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
          <h4 className="dash-heading">Custom Job Listings</h4>
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
                  <Link to={result.redirect_url}>
                    <Button className="btn listing-button ">
                      Full Job Listing
                    </Button>
                  </Link>
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
