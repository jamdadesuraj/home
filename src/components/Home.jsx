import React, { useState } from "react";
import "./home.css";
import homeApi from "./homeApi";

const Home = () => {
  const [home, setHome] = useState(homeApi);
  return (
    <>
      <section className="homeSection">
        <div class="container">
          <div class="d-flex justify-content-center align-items-center mt-5">
            <button class="btn btn-dark">OUR SERVICES</button>
          </div>
          <div class="d-flex justify-content-center mt-3">
            <span class="text text-center">
              Finding Best Services Now
              <br /> in Your Country
            </span>
          </div>
          <div class="row mt-2 g-4">
            {home.map((cVal) => {
              const { id, name, img } = cVal;

              return (
                <>
                  <div class="col-md-3">
                    <div class="cards p-1 grow">
                      <div class="d-flex justify-content-between align-items-center p-2">
                        <div class="flex-column lh-1 imagename">
                          <span>{name}</span>{" "}
                        </div>
                        <div class="homeImg">
                          <img src={img} height="100" width="100" />{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
