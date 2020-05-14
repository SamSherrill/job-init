import React from "react";
import "./Home.css";
import Hero from "../../img/hero-video.mov";
import { Link } from "react-router-dom";

const styles = {
  video: {
    width: "100vw",
  },
  videoContainer: {
    height: "100%",
    overflow: "hidden",
  },
};
const Home = () => {
  return (
    <>
      <div class="home-hero">
        <div style={styles.videoContainer} id="video">
          <video
            autoPlay muted
            loop
            id="my_video_1"
            class="video-js"
            preload="auto"
            data-setup="{}"
            style={styles.video}
          >
            <source src={Hero} type="video/mp4" />
          </video>
        </div>

        <div className="container">
          <div className="row">
            <div className="col"></div>
          </div>
        </div>
      </div>
      <div className="container">
        <br></br>
        <br></br>
        <div className="row justify-content-center">
          <h1 className="display-4" id="brand-format">
            job <span id="brand-two">init</span>
          </h1>
        </div>

        <div className="row justify-content-center">
          <h6 className="lead blurb">
            Personalized job listings exclusively for junior developers
          </h6>
        </div>
        <div className="row justify-content-center">
          <Link to="/login" className="btn home-button">
            Login
          </Link>
          <Link to="/signup" className="btn home-button-2">
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
