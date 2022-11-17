import React, { useState } from "react";
import { About } from "./About";
import "./Home.css";
import modi from "../images/myimg.png";
import { Hireme } from "../Components/Hireme";

export const Home = () => {
  const [click, setActive] = useState(false);
  return (
    <div className="home">
      <div className="name">
        <p>Satish Rukhmaji Gavhane</p>
        <p>Software Developer</p>
         <div className="btns">
          <button onClick={() => setActive(!click)}>Hire/Refer ME</button>
          <button>
            <a href="https://drive.google.com/file/d/1RDdmZeAxicpCCC7RTvMw_BkLu6EgnZVv/view?usp=share_link">
              View My Resume
            </a>
          </button>
        </div>
        {click === true && <Hireme title="hiremepage" />}
      </div>
      <div className="img">
        <img src={modi} />
      </div>
    </div>
  );
};
 