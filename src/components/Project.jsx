import React, { useState } from "react";
import "./project.css";
import projectApi from "./projectApi";

const Project = () => {
  const [project, setProject] = useState(projectApi);

  return (
    <>
      <section>
        <div className="projectData">
          <h1>LATEST PROJECTS</h1>
          <div className="containerm">
            <div className="row">
              {project.map((cVal) => {
                const { id, img, icon } = cVal;
                return (
                  <>
                    <div className="col-md-4 mt-4">
                      <div className="image">
                        <img src={img} alt="" /> <i class={icon}></i>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
