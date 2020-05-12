import React, { Component } from "react";
import results from "../../results.json";
import "./Dashboard.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class Dashboard extends Component {
  state = {
    results,
  };

  render() {
    return (
      <>
        <br></br>
        <div className="container">
          <h4 className="dash-heading">Custom Job Listings</h4>
        </div>

        <div className="container">
          {this.state.results.map((result) => (
            <Card className="result-card">
              <Card.Header as="h5" className="feature-bar">
                {result.title}
              </Card.Header>
              <Card.Body>
                <Card.Title>{result.company}</Card.Title>
                <Card.Text>{result.location}</Card.Text>
                <hr></hr>
                <Card.Text>{result.description}</Card.Text>
                <div className="justify-content-center">
                  <a href={result.link}>
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
