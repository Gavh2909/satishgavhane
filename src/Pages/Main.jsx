import React, { useState } from "react";
import { About } from "./About";
import { Home } from "./Home";
import "./Main.css";
import { Footer } from "../Components/Footer";
import { Contact } from "./Contact";

export const Main = () => {
  const [active, setActive] = useState("home");

  return (
    <div className="main">
      <nav>
        <label className="logo" onClick={() => setActive("home")}>SatishGavhane</label>
        <ul>
          <li onClick={() => setActive("home")}>Home</li>
          <li onClick={() => setActive("about")}>About Me</li>
          <li onClick={() => setActive("contact")}>Contact Me</li>
          <li><a href="https://drive.google.com/file/d/1RDdmZeAxicpCCC7RTvMw_BkLu6EgnZVv/view?usp=share_link">Resume</a></li>
        </ul>
      </nav>

      <div className="main-content">
        {active === "home" && <Home title="homepage" />}
        {active === "about" && <About title="aboutpage" />}
        {active === "contact" && <Contact title="contactpage" />}
      </div>
      <Footer />
    </div>
  );
};
