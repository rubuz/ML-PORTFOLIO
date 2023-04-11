import React from "react";
import "./about.css";
import PortraitImg from "../../assets/portrait1.jpg";
import CV from "../../assets/CV6-pdf.pdf";
import MyInfo from "./MyInfo";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>
      <div className="about__container container grid">
        <img src={PortraitImg} className="about__img" alt="portrait of me" />
        <div className="about__data">
          <MyInfo />

          <p className="about__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            similique quasi dolor minus modi error nulla, commodi architecto
            incidunt quidem dicta molestiae, tempora fugit aliquid omnis nisi
            suscipit neque quam!
          </p>

          <a download="" href={CV} className="button button--flex">
            Download CV <i class="uil uil-file-export about__download-icon"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
