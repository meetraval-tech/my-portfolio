import React from "react";
import ProjectList from "./ProjectList";
import "./Project.css";

const Project = () => {
  const data = [
    {
      name: "Car Rental Website",
      des: "Designed and implemented a dynamic car booking website using core PHP and jQuery. Created a user-friendly interface for browsing cars, selecting rental dates, and making reservations. Developed an intuitive admin panel to manage listings, bookings, and inquiries efficiently. Ensured optimal performance across devices with responsive design principles.Conducted thorough testing for robust functionality and a smooth user experience.",
      projectlink: "https://react-company-profile.netlify.app/",
      techused: [
        {
          techname: "HTML5",
        },
        {
          techname: "bootstrap 5",
        },
        {
          techname: "jQuery",
        },
        {
          techname: "Core PHP",
        },
        {
          techname: "Mysqli",
        },
      ],
    },

    {
      name: " CMS website",
      des: "The primary objective of this project is to develop a user-friendly CMS website, aimed at delivering an immersive online experience. ",
      projectlink: "https://react-company-profile.netlify.app/",
      techused: [
        {
          techname: "HTML5",
        },
        {
          techname: "CSS3",
        },
        {
          techname: "jQuery",
        },
        {
          techname: "Wordpress - PHP",
        },
         {
          techname: "Mysqli",
        },
      ],
    },


  ];

  return (
    <div className="container projects-container" id="project">
      <div className='section-title'>
        <h5>Projects</h5>
        <span className='line'></span>
      </div>

      <div className="row">
        {data.map((item, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>

            <ProjectList  {...item} />

          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
