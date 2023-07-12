import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { v4 } from "uuid";

const ProjectItem = ({ item }) => {
  const [toggleState, setToggleState] = useState(false);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="project__card">
      <div className="project__img-container" onClick={() => toggleTab(true)}>
        <LazyLoadImage
          src={item.image}
          alt="project small screenshot"
          className="project__img"
          effect="blur"
        />
        <div className="project__img-layer">
          <p className="project__img-layer__text">Read More</p>
        </div>
      </div>
      <h3 className="project__title">{item.title}</h3>
      <a href={item.url} className="project__button" target="_blank">
        Demo
        <i className="bx bx-chevron-right project__button-icon"></i>
      </a>

      <div
        className={
          toggleState ? "project__modal active__modal" : "project__modal"
        }
      >
        <div className="project__modal-content">
          <h3>{item.title}</h3>
          <p className="project__modal-content__description">
            {item.modal.description}
          </p>
          <div className="project__modal-content-tech">
            <p className="tech-title">Stack:</p>
            <ul>
              {item.modal.tech.map((tech) => (
                <li key={v4()}>{tech}</li>
              ))}
            </ul>
          </div>
          <i
            className="uil uil-times project__modal-close"
            onClick={() => toggleTab(false)}
          ></i>
          <a href={item.url} className="project__button" target="_blank">
            Demo
            <i className="bx bx-chevron-right project__button-icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
