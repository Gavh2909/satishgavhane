import React from "react";
import "./Hireme.css";
export const Hireme = () => {
  return (
    <div className="hireme">
      <form
        action="mailto:gavhane.satish29@gmail.com"
        method="post"
        enctype="text/plain"
      >
       Name :<input type="text" name="name" placeholder="Your Name Please" /> 
       Email :<input type="email" name="email" placeholder="Email Address" /> 
       Subject :<input type="text" name="name" placeholder="Position?"/> 
       Message :<input type="text" name="name" placeholder="Message for me"/> 
      <div className="btn">
              <input type="submit" value="Send" /> {" "}
              <input type="reset" value="Reset" />
      </div>
       
      </form>
    </div>
  );
};
