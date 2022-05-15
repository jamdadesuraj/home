import React from "react";
import "./about.css";
import aboutImg from "../images/about.png";
const About = () => {
  return (
    <>
      <section className="aboutSection">
        <div className="aboutData">
          <h1>INSPIRED INTERIORS</h1>
          <h2>TRANSFORMING SPACES – TRANSFORMING LIVES</h2>
          <div className="row">
            <div className="col-12 col-md-6 ">
              <div className="aImg">
                <img src={aboutImg} alt="about-img" />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="aboutPara">
                <p>
                  Why do we use it? It is a long established fact that a reader
                  will be distracted by the readable content of a page when
                  looking at its layout. The point of using Lorem Ipsum is that
                  it has a more-or-less normal distribution of letters, as
                  opposed to using 'Content here, content here', making it look
                  like readable English. Many desktop publishing packages and
                  web page editors now use Lorem Ipsum as their default model
                  text, and a search for 'lorem ipsum' will uncover many web
                  sites still in their infancy. Various versions have evolved
                  over the years, sometimes by accident, sometimes on purpose
                  (injected humour and the like).
                </p>
              </div>
            </div>
          </div>
          <button>About Us</button>
        </div>
      </section>
    </>
  );
};

export default About;
