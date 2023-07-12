import React from "react";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">Matjaž Lovenjak</h1>
      <h2 className="home__subtitle">Web Developer</h2>
      <p className="home__description">
        I'm self taught web developer with a passion for front-end, based in
        Brežice, Slovenia
      </p>
      <a href="#contact" className="button button--flex">
        Say Hello <i className="uil uil-message button__icon"></i>
      </a>
    </div>
  );
};

export default Data;
