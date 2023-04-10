import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.hmtl" className="nav__logo">
          ML.Portfolio
        </a>
        <div className="nav__menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav__close"></i>
        </div>
        <div className="nav__toggle">
          <i class="uil uil-bars"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
