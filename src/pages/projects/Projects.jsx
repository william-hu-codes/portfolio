import { useState, useEffect } from "react";
import "./Projects.css"
import images from "../../assets/images";

function Projects(props) {
  // create state to hold projects
  const [projects, setProjects] = useState(null);

  //create function to make api call
  async function getProjectsData() {
		//make api call and get response
    const response = await fetch("./projects.json");
		// turn response into javascript object
    const data = await response.json();
		// set the projects state to the data
    setProjects(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => { getProjectsData() }, []);

  // define a function that will return the JSX needed once we get the data
  function loaded() {
    return projects.map((project) => (
      <div className="project-card" >
        <h2>{project.name}</h2>
        <img className="project-img" src={project.image} />
        <div classNamed="buttons-div flex-ctr-ctr" >
          <a href={project.git}>
            <button>// GitHub</button>
          </a>
          <a href={project.live}>
            <button>// Live Site</button>
          </a>
        </div>
      </div>
    ));
  };

  if (!projects) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="projects">
      <div className="projects-grid-ctr" >
      {loaded()}
      </div>
    </div>
  )
  // return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;

