import React from "react";
import stock from "../../img/stock.jpeg";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div class="home-hero">
        <div className="container">
          <div className="row">
            <div className="col">
              {/* <h1 class="display-4" id="brand-format">
                job <span id="brand-two">init</span>
              </h1> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
          <br></br>
        <div className="row justify-content-center">
          <h1 className="display-4" id="brand-format">
            job <span id="brand-two">init</span>
          </h1>
        </div>
        <div className="row justify-content-center">
          <h6 className="lead">
            Personalized job listings exclusively for junior developers
          </h6>
        </div>
        <div className="row justify-content-center">
          <button className="btn home-button">Login</button>
          <button className="btn home-button">Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default Home;
