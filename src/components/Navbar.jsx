import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div>
        <div class="header-blue">
          <div className="container-fluid ">
            <nav class="navbar navbar-expand-lg ">
              <div className="container-fluid">
                <img src="./img/logo.png" alt="logo" />
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-links navbar-nav mr-auto">
                    <li className="navbar-dropdown nav-item">
                      <a href="#">SERVICES</a>
                      <div className="dropdown">
                        <a href="#">NEW HOMES</a>
                        <a href="#">KITCHENS</a>
                        <a href="#">BATHROOMS</a>
                        <a href="#">OUTDOOR LIVING</a>
                      </div>
                    </li>
                    <li className="navbar-dropdown nav-item">
                      <a href="#">ABOUT</a>
                      <div className="dropdown">
                        <a href="#">MEET OUR TEAM</a>
                        <a href="#">DESIGN CAMPUS</a>
                        <a href="#">ASSOCIATIONS & PARTNERSHIPS</a>
                      </div>
                    </li>
                    <li className="navbar-dropdown nav-item">
                      <a href="#">EXPERTISE</a>
                      <div className="dropdown">
                        <a href="#">ARCHITECTURE</a>
                        <a href="#">INTERIOR DESIGN</a>
                        <a href="#"> BUILD</a>
                      </div>
                    </li>
                    <li className="navbar-dropdown nav-item">
                      <a href="#">CLIENT REVIEWS </a>
                    </li>
                    <li className="navbar-dropdown nav-item">
                      <a href="#">CONTACT US</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div class="container ">
            <div class="row">
              <div class="col-12 col-lg-6 col-xl-5 offset-xl-1"></div>
              <div class="col-md-5 col-lg-5  hero">
                <h2>Interior design For Your Home</h2>

                <button class="btn-warning btn-lg" type="button">
                  Learn More<i class="fa fa-long-arrow-right ml-2"></i>
                </button>
                <div class="screen"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
