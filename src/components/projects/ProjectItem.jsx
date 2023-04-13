import React from "react";

const ProjectItem = ({ item }) => {
  return (
    <div className="project__card" key={item.id}>
      <img
        src={item.image}
        alt="project small screenshot"
        className="project__img"
      />
      <h3 className="project__title">{item.title}</h3>
      <a href={item.url} className="project__button" target="_blank">
        Demo
        <i class="bx bx-chevron-right project__button-icon"></i>
      </a>
    </div>
  );
};

export default ProjectItem;
