import React from "react";
import "./testimonial.css";
const Testimonial = () => {
  return (
    <>
      <section className="testmonialSection">
        <h1>What our client say</h1>
        <div className="container my-5  justify-content-center">
          <div className=" row justify-content-center ">
            <div className="col-lg-6 col-12 mt-5 ">
              <div className="card mt-3 ">
                <div className="layer"></div>
                <div className="content">
                  <div className="card-header text-center border-0">
                    <div className="row justify-content-center my-4">
                      <div className="col">
                        <div className="d-flex flex-lg-row flex-column-reverse no-gutters justify-content-center">
                          <div className="col-3  text-right">
                            <img
                              className="img-fluid"
                              id="quotes"
                              src="https://img.icons8.com/ultraviolet/40/000000/quote-left.png"
                              width="110"
                              height="110"
                            />
                          </div>
                          <div className="col pr-lg-5">
                            <img
                              className=" img-1 mr-lg-5 "
                              src="https://i.imgur.com/nUNhspp.jpg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body text-center pb-3 ">
                    <div className="row  justify-content-center">
                      <div className="col text-center justify-content-center ">
                        <p className="bold text-center px-md-3">
                          {" "}
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr className="mt-auto mb-4" />
                  <div className="card-footer text-center border-0 mt-0 pt-0 mb-3">
                    <div className="row text-center name mt-auto ">
                      <div className="col">
                        <h4 className="mb-0 Elizabeth">Sophia Smith</h4>
                        <small className="mt-0 text-white">
                          interior Specialist
                        </small>
                        <p>
                          <span className="fa fa-star  text-warning mr-1"></span>
                          <span className="fa fa-star text-warning  mr-1"></span>
                          <span className="fa fa-star text-warning  mr-1"></span>
                          <span className="fa fa-star-half-o text-warning mr-1"></span>
                          <span className="fa fa-star-o text-warning mr-1"></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-12 mt-5 ">
              <div class="card mt-3 ">
                <div class="layer"></div>
                <div class="content">
                  <div class="card-header text-center border-0">
                    <div class="row justify-content-center  my-4">
                      <div class="col">
                        <div class="d-flex flex-lg-row flex-column-reverse no-gutters justify-content-center">
                          <div class="col-3  text-right">
                            <img
                              class="img-fluid"
                              id="quotes"
                              src="https://img.icons8.com/ultraviolet/40/000000/quote-left.png"
                              width="110"
                              height="110"
                            />
                          </div>
                          <div class="col pr-lg-5">
                            <img
                              class=" img-1 mr-lg-5 "
                              src="https://i.imgur.com/HjKTNkG.jpg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body text-center pb-3 ">
                    <div class="row  justify-content-center">
                      <div class="col text-center justify-content-center ">
                        <p class="bold text-center px-md-3">
                          {" "}
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr class="mt-auto mb-4" />
                  <div class="card-footer text-center border-0 mt-0 pt-0 mb-3">
                    <div class="row text-center name mt-auto ">
                      <div class="col">
                        <h4 class="mb-0 Elizabeth">SMike Housin</h4>
                        <small class="mt-0 text-white">
                        Architecture Specialist
                        </small>
                        <p>
                          <span class="fa fa-star  text-warning mr-1"></span>
                          <span class="fa fa-star text-warning  mr-1"></span>
                          <span class="fa fa-star text-warning  mr-1"></span>
                          <span class="fa fa-star-o text-warning  mr-1"></span>
                          <span class="fa fa-star-o text-warning mr-1"></span>
                          <span class="fa fa-star-o text-warning mr-1"></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
