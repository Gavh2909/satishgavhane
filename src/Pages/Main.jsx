import React, { useState } from "react";
import { About } from "./About";
import { Home } from "./Home";
import "./Main.css";
import { Footer } from "../Components/Footer";
import { Contact } from "./Contact";
import { click } from "@testing-library/user-event/dist/click";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
export const Main = () => {
  const [active, setActive] = useState("home");
  const [clicked, setClicked] = useState(false);
  return (
    <div className="main">
      <nav>
        <label className="logo" onClick={() => setActive("home")}>
          SatishGavhane
        </label>

        <div>
          <ul id="navbar" className={clicked ?"#navbar active":"#navbar"}>
            <li onClick={() => {setActive("home"); setClicked(!clicked)}}>Home</li>
            <li onClick={() => {setActive("about"); setClicked(!clicked)}}>About Me</li>
            <li onClick={() => {setActive("contact"); setClicked(!clicked)}}>Contact Me</li>
            <li>
              <a href="https://drive.google.com/file/d/1RDdmZeAxicpCCC7RTvMw_BkLu6EgnZVv/view?usp=share_link">
                Resume
              </a>
            </li>
          </ul>
        </div>

        <div id="mobile" onClick={() => setClicked(!clicked)}>
          <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>

      <div className="main-content">
         {active === "home" &&  <Home />}
        {active === "about" && <About />}
        {active === "contact" && <Contact />}
       </div>
      <Footer />
    </div>
  );
};
