import React from "react";
import "./Home.css";
import Hero from "../../img/hero-video.mov";

const Home = () => {

  // function hero() {
  //   $("#video").click(function() {
  //     var Video1 = $("#my_video_1").get(0);
  //     Video1.play();
  // });
  // }
  return (
    <>
      <div class="home-hero">
        {/* <div id="video">
    <video id="my_video_1" class="video-js vjs-default-skin" 
     preload="auto" width="501" height="282" poster={Hero} onclick="this.play();"controls
     data-setup="{}">
     <source src="video/final.webm" type='video/webm'/>
     <source src="video/final.mp4" type='video/mp4'/>
    </video>
      </div> */}
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
          <a href="/login" className="btn home-button">
            Login
          </a>
          <a href="/signup" className="btn home-button-2">
            Sign Up
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
