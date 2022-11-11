import React from 'react'
import modi from "../images/myimg.png"
import "./About.css"
export const About = () => {
  return (
    <div className='about'>
      <div className="profile">
      <img src={modi} alt="" srcset="" />
      <h1>Satish Rukhmaji Gavhane</h1>
      </div>
          
       <div className="education">
        <h2 style={{textAlign:'center'}}>EDUCATION</h2>
      <br />
          <p>B.Tech - Production Engineering <br />
             Shri Guru Gobind Singhji Institute of <br />
             Engineering and Technology (SGGSIET), Nanded <br />
             July-2018 - June-2022 <br />
             CGPA - 7.81</p>
             <br /> 
          <p>Higher Secondary Certificate(12th) <br />
             Nanded Education Society's Science College, Nanded <br />
             June-2016 - May-2018, <br />
             Percentage - 70.15%</p>
       </div>

       <div className="work">
        <h2>Work Experience</h2> <br />
        <p>
        <h3>Programmer Analyst Trainee</h3>
        <a href="https://www.cognizant.com/">Cognizant</a> Technology Solutions <br />
        January-2022 - June-2022 <br />
        Working as a full stack developer. HTML | CSS | JavaScript | SQL | ADO.NET <br />
        Worked on one practice project also - completed 3 assigned <br />
        tasks on time. Project Name : Medicaps - project was related to Medicines <br />
        and medical store management. 
        <br /> <br />
        <h3>Web Developement Intern</h3> 
        <a href="https://letsgrowmore.in/">LetsGrowMore</a> <br />
        July-2021 - August-2021 <br />
        Learnt front end web development technologies. HTML | CSS | JavaScript
        </p>
       </div>

       <div className="projects">
        <h2 style={{textAlign:'center'}}>PROJECTS</h2> <br />
        <p><h3>1. Finite Element Analysis of Composite leaf spring</h3>
           This is my Btech final year project. In this project I have analyzed <br />
           the leaf spring in various loading and boundary conditions using <br />
           FEA method in ANSYS software.  <br />
           Techonologies Used : ANSYS SOFTWARE, FEA technique</p>
           <br />
           <p>
          <h3>2. FUEL TRACKING SYSTEM</h3> 
           Application for tracking fuel filling in vehicles. <br />
           Technologies Used : HTML | CSS | JavaScript | React Js
           </p>
       </div>

       
     </div>
  )
}
