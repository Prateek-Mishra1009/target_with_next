import React from "react";
import Logo from "./Logo";
import Maincontent from "./mainContent";

const Header = () => {
  const hanndleToggle = () => {
    console.log("clicked");
    var navLinks = document.getElementById("nav-links");
    if (navLinks.style.display === "flex") {
      navLinks.style.display = "none";
    } else {
      navLinks.style.display = "flex";
    }
  };

  return (
    <div>
      <header>
        <nav>
          <div class="logo">
            <Logo />
          </div>
          <div class="menu-icon" id="menu-icon" onClick={hanndleToggle}>
            &#9776;
          </div>
          <div className="nav-container">
            <ul class="nav-links" id="nav-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">Geography</a>
              </li>
              <li>
                <a href="#services">History</a>
              </li>
              <li>
                <a href="#test">Tests</a>
              </li>
              <li>
                <a href="#notes">Notes</a>
              </li>
              <li>
                <a href="#current">Current Affairs</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>{" "}
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>{" "}
          </div>{" "}
          <a
            href="https://www.youtube.com/@ExamMaster1"
            target="_blank"
            className="ytlinks"
          >
            <img className="ytHead" src="yt.webp" />
          </a>
        </nav>
      </header>
      <main>
        <section id="home">
          <Maincontent />
        </section>
      </main>
    </div>
  );
};

export default Header;
