import React from "react";
import { projectsData } from "./Data";
import ProjectItem from "./ProjectItem";

const Project = () => {
  return (
    <div className="project__container container grid">
      {projectsData.map((item) => {
        return <ProjectItem item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Project;
