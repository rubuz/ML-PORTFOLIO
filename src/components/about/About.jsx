import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
        <LazyLoadImage
          src={PortraitImg}
          className="about__img"
          alt="portrait of me"
          effect="blur"
        />
        <div className="about__data">
          <MyInfo />

          <p className="about__description">
            I am an IT engineer transitioning to front-end web development with
            a passion for creating intuitive and engaging user interfaces. As a
            self-taught developer, I have a strong foundation in HTML, CSS, and
            JavaScript, and I am currently gaining experience in React. <br />
            <br /> I am committed to continuous learning and growth, and I
            believe that collaboration is essential to success. With strong
            communication skills and a dedication to delivering high-quality
            results, I am excited to bring my skills and expertise to new
            projects and contribute to the growth and success of any
            organization I work with.
          </p>

          <a
            download=""
            href={CV}
            className="button button--flex"
            aria-label="Download my CV in pdf format"
          >
            Download CV <i className="uil uil-file-export button__icon"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
