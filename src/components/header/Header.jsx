import React, { useState } from "react";
import "./header.css";

function Header() {
  // Toggle menu
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          <span>ML</span>.Portfolio
        </a>

        <div className={showMenu ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => setShowMenu(!showMenu)}
          ></i>
        </div>
        <div
          className={showMenu ? "nav__toggle hide-icon" : "nav__toggle "}
          onClick={() => setShowMenu(!showMenu)}
        >
          <i class="uil uil-bars"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
