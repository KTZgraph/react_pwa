import React from "react";

// https://www.udemy.com/course/react-progressive-web-app-with-workbox-and-webpack-tutorial/learn/lecture/26963402#overview
// 3:50 inny sposób importu obrazka
import NetflixBackgroundImage from "../../images/netflix-background.png";
import NarcosLogo from "../../images/narcos.logo.png";

const Hero = () => {
  return (
    <div id="hero" className="hero">
      <div className="content">
        <img className="logo" src={NarcosLogo} />
        <h2>Season 2 now available</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          id quam sapiente unde voluptatum alias vero debitis, magnam quis quod.
        </p>
        <div className="button-wrapper">
          <a href="#" className="button-el">
            Watch now
          </a>
          <a href="#" className="button-el">
            My list
          </a>
        </div>
      </div>
      <div
        className="overlay"
        style={{ background: `url(${NetflixBackgroundImage})` }}
      />
    </div>
  );
};

export default Hero;
