import React, { Component } from "react";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <>
      <br></br>
      <div className="container">
        <div className="card">
          <h5 className="card-header">Featured</h5>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content. 
            </p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
