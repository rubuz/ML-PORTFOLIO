import React from "react";
import { projectsData } from "./Data";
import ProjectItem from "./ProjectItem";
import { v4 } from "uuid";

const Project = () => {
  return (
    <div className="project__container container grid">
      {projectsData.map((item) => {
        return <ProjectItem item={item} key={v4()} />;
      })}
    </div>
  );
};

export default Project;
