import React from "react";
import { Link } from "react-router-dom";
// import '../index.css'

const LandingScreen = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg landing-navbar">
        <div className="container">
          <Link className="navbar-brand" to="/home" style={{ color: "white" }}>
            IvyEarth
          </Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="mr-auto"></div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us{" "}
                </Link>
              </li>
              <li className="nav-item">
                <i className="fas fa-user" style={{ color: "white" }}></i>
                <Link
                  className="nav-link"
                  to="/login"
                  style={{ display: "inline-block" }}
                >
                  Sign In{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="landing-image"
        style={{
          backgroundImage: "url(images/earth.jpg)",
          maxWidth: "100%",
          backgroundSize: "cover",
        }}
      >
        <div className="dark-overlay">
          <div className="landing-text">
            <h1 style={{ fontSize: "50px", fontWeight: "bold" }}>
              Plants are Awesome
            </h1>
            <h5>Grow beautiful plants in your home</h5>
            <Link to="/home">
              <button className="landing-button">
                <span>GET STARTED</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingScreen;
