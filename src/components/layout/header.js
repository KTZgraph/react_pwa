import { Link } from "react-router-dom";
import React from "react";
import NetflixLogo from "../icons/NetflixLogo";
import Nav from "./nav";
import "../../images/netflix-logo.png";

const Header = () => {
  return (
    <header className="header">
      <div id="logo" className="logo">
        <Link to="/">
          <NetflixLogo />
        </Link>
      </div>
      <Nav />
      <div className="user-profile">
        <div className="user">
          <div className="name">Jan Kowlaski</div>
          <div className="image">
            {/* WARNING ściezka zwiazana z konfiguracja webpacka         use: "file-loader?name=./images/[name].[ext]",             */}
            {/* asset ./images/netflix-logo.png 18.2 KiB [emitted] [from: src/images/netflix-logo.png] (auxiliary name: main) widac w konsoli developerskiej */}
            <img src="/images/netflix-logo.png" alt="netflix" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
