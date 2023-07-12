import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/rubuz88/"
        className="home__social-icon"
        target="_blank"
        aria-label="Link to my Instagram profile"
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/matjaz-lovenjak/"
        className="home__social-icon"
        target="_blank"
        aria-label="Link to my LinkedIn profile"
      >
        <i className="uil uil-linkedin"></i>
      </a>
      <a
        href="https://github.com/rubuz"
        className="home__social-icon"
        target="_blank"
        aria-label="Link to my GitHub profile and repository"
      >
        <i className="uil uil-github"></i>
      </a>
    </div>
  );
};

export default Social;
