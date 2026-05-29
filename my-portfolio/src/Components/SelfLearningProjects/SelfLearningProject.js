import React from "react";
import SelfLearningProjectsList from "./SelfLearningProjectsList";
import "./SelfLearningProject.css";

const SelfProject = () => {
  const data = [
    {
      name: "Todo App",
      des: "Built a full-stack Todo App using React.js and Laravel with CRUD functionality, REST APIs, and a responsive user interface for efficient task management.",
      projectlink: "https://todo-app-snowy-one-32.vercel.app/",
      techused: [
        {
          techname: "React ",
        },
        {
          techname: "Laravel",
        },
        {
          techname: "Vite",
        },
      ],
    },

  ];

  return (
    <div className="container projects-container" id="self_project">
      <div className='section-title'>
        <h5>Self Learning Projects</h5>
        <span className='line'></span>
      </div>

      <div className="row">
        {data.map((item, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>

            <SelfLearningProjectsList  {...item} />

          </div>
        ))}
      </div>
    </div>
  );
};

export default SelfProject;
