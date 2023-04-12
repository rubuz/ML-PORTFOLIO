import React from "react";
import "./projects.css";
import Project from "./Project";

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Recent work</span>
      <Project />
    </section>
  );
};

export default Projects;
