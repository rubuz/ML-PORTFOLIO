import React, { useEffect, useRef, useState } from "react";
import "./header.css";

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
};

function Header() {
  // Header background
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  // Toggle menu
  const [showMenu, setShowMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  // Dark theme toggle

  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // active scrool navbar
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          <span>ML</span>.Portfolio
        </a>

        <div className={showMenu ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#projects"
                onClick={() => setActiveNav("#projects")}
                className={
                  activeNav === "#projects"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i> Projects
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
            <li className="nav__item" onClick={toggleTheme}>
              {theme === "light-theme" ? (
                <i className="uil uil-sun theme-toggle nav__link"></i>
              ) : (
                <i className="uil uil-moon theme-toggle nav__link"></i>
              )}
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
          <i className="uil uil-bars"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
